<?php

namespace App\Concerns;

use App\Models\ChangeLog;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait TracksChanges
{
    public function changeLogs(): MorphMany
    {
        return $this->morphMany(ChangeLog::class, 'changeable')
            ->latest();
    }

    public static function bootTracksChanges(): void
    {
        static::updating(function (Model $model): void {
            $model->trackChanges();
        });
    }

    protected function trackChanges(): void
    {
        $dirty = $this->getDirty();
        $original = $this->getOriginal();

        foreach ($dirty as $field => $newValue) {
            if ($field === 'updated_by') {
                continue;
            }

            $oldValue = $original[$field] ?? null;

            [$oldValue, $newValue] = $this->normalizeTrackedValues(
                $field,
                $oldValue,
                $newValue
            );

            if ((string) $oldValue === (string) $newValue) {
                continue;
            }

            ChangeLog::create([
                'changeable_id' => $this->id,
                'changeable_type' => static::class,
                'field_name' => $field,
                'old_value' => $oldValue ?? '',
                'new_value' => $newValue ?? '',
                'user_id' => auth()->id(),
                'user_name' => auth()->user()?->name ?? 'EUS',
            ]);
        }
    }

    protected function normalizeTrackedValues(string $field, mixed $oldValue, mixed $newValue): array
    {
        if ($field === 'coordinates') {
            return $this->normalizeCoordinates($oldValue, $newValue);
        }

        if (is_array($oldValue)) {
            $oldValue = implode(',', $oldValue);
        }

        if (is_array($newValue)) {
            $newValue = implode(',', $newValue);
        }

        return [$oldValue, $newValue];
    }

    protected function normalizeCoordinates(mixed $oldValue, mixed $newValue): array
    {
        if (is_array($oldValue)) {
            $oldValue = trim(($oldValue['lat'] ?? '') . ' ' . ($oldValue['lon'] ?? ''));
        }

        if (is_object($newValue) && method_exists($newValue, 'getValue')) {
            $grammar = app('db')->getQueryGrammar();

            $newValue = $newValue->getValue($grammar);
            $newValue = str_replace("ST_GeomFromText('POINT(", '', $newValue);
            $newValue = str_replace(")')", '', $newValue);
        }

        return [$oldValue, $newValue];
    }
}

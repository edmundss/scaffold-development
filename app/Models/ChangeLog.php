<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChangeLog extends BaseModel
{
    protected $fillable = [
        'changeable_id',
        'changeable_type',
        'field_name',
        'old_value',
        'new_value',
        'user_id',
        'user_name',
    ];

    protected $with = ['user'];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];

    protected $appends = ['visible', 'name', 'formatted_old_value', 'formatted_new_value'];

    public function changeable()
    {
        return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo(User::class)->withTrashed();
    }

    public function getVisibleAttribute()
    {
        // Get the related model instance
        $changeable = $this->changeable;

        // Fetch the change log settings from the related model's changeLogSettings() method
        $settings = method_exists($changeable, 'changeLogSettings') ? $changeable->changeLogSettings() : [];

        // If no settings are defined, or the field is not specified in the settings, make the change log visible
        if (! $settings || ! isset($settings[$this->field_name])) {
            return true;
        }

        // Check if the field has a permission requirement
        if (isset($settings[$this->field_name]['permission'])) {
            return auth()->user()->can($settings[$this->field_name]['permission']);
        }

        // If no permission is required, the change log is visible
        return true;
    }

    public function getNameAttribute()
    {
        $value = $this->field_name;

        // Get the related model instance
        $changeable = $this->changeable;

        // Fetch the change log settings from the related model's changeLogSettings() method
        $settings = method_exists($changeable, 'changeLogSettings') ? $changeable->changeLogSettings() : [];

        // If no settings are defined, or the field is not specified in the settings, return the field name as is
        if (! $settings || ! isset($settings[$value])) {
            return $value;
        }

        // Return the label from the settings
        return $settings[$value]['label'] ?? $value;
    }

    public function getFormattedOldValueAttribute()
    {
        return $this->formatValue($this->old_value);
    }

    public function getFormattedNewValueAttribute()
    {
        return $this->formatValue($this->new_value);
    }

    private function formatValue($value)
    {
        // Get the related model instance
        $changeable = $this->changeable;

        // Fetch the change log settings from the related model's changeLogSettings() method
        $settings = method_exists($changeable, 'changeLogSettings') ? $changeable->changeLogSettings() : [];

        // Get the setting for the specific field
        $fieldSettings = $settings[$this->field_name] ?? null;

        // If no specific settings found for the field, return the value as is (assuming it's a basic type)
        if (! $fieldSettings) {
            return $value;
        }

        // Determine the type and format the value accordingly
        switch ($fieldSettings['type']) {
            case 'bool':
                return $value ? __('Jā') : __('Nē');

            case 'relation':
                $relation = '\\App\\Models\\'.$fieldSettings['relation'];
                $nameField = $fieldSettings['name'];

                $relatedModel = $relation::find($value);

                return $relatedModel ? $relatedModel->$nameField : null;

            case 'enum':
                return config($fieldSettings['config'])[$value] ?? $value;

            case 'basic':
            default:
                return $value;
        }
    }
}

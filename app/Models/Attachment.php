<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;

class Attachment extends Model
{
    use Userstamps;

    protected $fillable = [
        'file_name',
        'path',
        'is_image',
        'attachable_id',
        'attachable_type',
    ];

    public function attachable()
    {
        return $this->morphTo();
    }
}

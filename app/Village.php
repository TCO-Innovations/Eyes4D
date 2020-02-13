<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    public function surveys()
    {
        return $this->hasMany(Surveys::class, "assigned_village", 'title');
    }
}

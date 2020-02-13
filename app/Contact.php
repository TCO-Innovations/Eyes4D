<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public function surveys()
    {
        return $this->hasMany(Surveys::class, 'contact_name', 'username');
    }
}

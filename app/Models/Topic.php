<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $guard = [];

    public function topicSubscription(){
        return $this->hasMany(TopicSubscription::class);
    }

    public function blog(){
        return $this->hasMany(Blog::class);
    }

}

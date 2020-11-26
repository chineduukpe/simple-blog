<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TopicSubscription extends Model
{
    use HasFactory;

    protected $fillable = ['topic_id','user_id'];

    public function subscribedUser(){
        return $this->belongsTo(User::class);
    }

    public function topic(){
        return $this->belongsTo(Topic::class);
    }
}

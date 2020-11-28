<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $guard = [];
    protected $appends = ['topic','user'];

    // public function user(){
    //     return $this->belongsTo(User::class);
    // }
    public function topic(){
        return $this->belongsTo(Topic::class);
    }
    function getTopicAttribute(){
        return $this->topic()->first()->topic;
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getUserAttribute(){
        return $this->user()->first()->only(['name','profile_image_url']);
    }
    
}

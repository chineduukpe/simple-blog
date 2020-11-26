<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function subscribedTopics(){
        return $this->hasMany(TopicSubscription::class);
    }

    public function topics(){
        $ids = $this->subscribedTopics()->pluck('topic_id');
        return Topic::whereIn('id',$ids)->get();
    }

    public function blogs(){
        return $this->hasMany(Blog::class);
    }

    public function timeline(){
        $ids = $this->subscribedTopics()->pluck('topic_id');
        return Blog::whereIn('topic_id',$ids)->latest()->paginate(10);
    }

    public function isSubscribedToTopic($topic_id)
    {
        return TopicSubscription::where('user_id',$this->id)->where('topic_id',$topic_id)->first() ?? false;
    }

}

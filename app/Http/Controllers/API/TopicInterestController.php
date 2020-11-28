<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\TopicSubscription;

class TopicInterestController extends Controller
{
    //

    public function index(){
        $user = auth()->user();
        $topics = auth()->user()->topics();
        return [
            'user' => $user,
            'topics' => $topics,
        ];
    }
    
    public function create()
    {
        $validated_data = request()->validate([
            'topic_id' => 'numeric|required'
        ]);

        if (auth()->user()->isSubscribedToTopic(request('topic_id'))) {
            return response(
                ['errors' => ['duplicate_data' => ['You are already subscribed to this topic']]],401);
        }

        $validated_data['user_id'] = auth()->id();

        $topic = TopicSubscription::create($validated_data);

        return response([
            'messages' => ['Subscription successful '],
            'topics' => auth()->user()->topics(),
        ]);
    }

    public function destroy(){
        $validated_data = request()->validate([
            'topic_id' => 'required|numeric'
        ]);

        if (!auth()->user()->removeTopicInterest($validated_data['topic_id'])) {
            return response([
                'errors' => [
                    'Not Found' => ['Seems like you are not subscribed to this pet channel']
                ]
            ],404);
        }

        return [
            'messages' => ['You have unsubscribed from the pet topic'],
            'topics' => auth()->user()->topics(),
        ];
    }
}

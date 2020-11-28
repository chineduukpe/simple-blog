<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TopicInterestController extends Controller
{
    //
    public function create()
    {
        $validated_data = request()->validate([
            'topic_id' => 'numeric|required'
        ]);

        if (auth()->user()->isSubscribedToTopic(request('topic_id'))) {
            return response([ "errors" => [
                'Duplicate' => ['You are already subscribed to this topic']
            ]],403);
        }

        $validated_data['user_id'] = auth()->id();

        $topic = TopicSubscription::create($validated_data);

        return response([
            'messages' => ['Subscription successful '],
            'topics' => auth()->user()->topics(),
        ]);
    }
}

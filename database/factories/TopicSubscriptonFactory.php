<?php

namespace Database\Factories;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class TopicSubsciptionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Model::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = [
            1, 2, 3, 4, 5, 6, 7, 8
        ];
        return [
            //
            'user_id' => $users[rand(0,count($users) -1)],
            'topic_id' => rand(1,9),
        ];
    }
}

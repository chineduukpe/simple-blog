<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'title' => $this->faker->sentence,
            'body' => $this->faker->text,
            'user_id' => $this->faker->randomDigitNotNull,
            'topic_id' => $this->faker->randomDigitNotNull,
            'blog_image_url' => 'http://localhost:8000/assets/img/bg/bg' . rand(1,8) . '.jpg'
        ];
    }
}

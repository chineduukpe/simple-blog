<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class XAuthorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // CHECK IF X-AUTHORIZATION HEADER IS PRESENT. SET AUTHORIZATION HEADER TO X-AUTHORIZATION VALUE
        if ($request->header('X-Authorization')) {
            # code...
        }
        return $next($request);
    }
}

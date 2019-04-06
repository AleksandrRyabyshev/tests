<?php

Route::get('/',  function () {
    return 'Hello World';
});


Route::group(['prefix' => 'v1', 'namespace' => 'Api\V1'], function () {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');

    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::apiResource('users', 'UserController');
        Route::get('user/auth', 'AuthController@getAuthenticatedUser');
    });
});



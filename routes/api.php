<?php

Route::get('/',  function () {
    return 'Hello World';
});

Route::group(['prefix' => 'v1', 'namespace' => 'Api\V1'], function () {
    Route::apiResource('users', 'UserController');
});



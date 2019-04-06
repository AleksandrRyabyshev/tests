<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\User\Store;
use App\Http\Requests\User\Update;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * @var User
     */
    private $user;

    /**
     * UserController constructor.
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json($this->user::all(), 200);
    }

    /**
     *
     * Store a newly created resource in storage.
     *
     * @param Store $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Store $request)
    {
        $user = $this->user;

        $user->fill($request->except('password'));
        $user->password = Hash::make($request->input('password'));
        $user->save();

        return response()->json($user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = $this->user::find($id);

        if (!is_null($user)) {
            $data = $user;
            $status = 200;
        } else {
            $data = ['message' => 'notFoundUser'];
            $status = 404;
        }

        return response()->json($data, $status);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Update $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, $id)
    {
        $user = $this->user::find($id);

        if (!is_null($user)) {
            $user->fill($request->except('password'));
            $user->password = Hash::make($request->input('password'));
            $data = $user->save();
            $status = 200;
        } else {
            $data = ['message' => 'notFoundUser'];
            $status = 404;
        }

        return response()->json($data, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = $this->user::find($id);

        if (!is_null($user)) {
            $data = $user->delete();
            $status = 200;
        } else {
            $data = ['message' => 'notFoundUser'];
            $status = 404;
        }

        return response()->json($data, $status);
    }
}

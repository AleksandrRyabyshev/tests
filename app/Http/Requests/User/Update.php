<?php

namespace App\Http\Requests\User;

use App\Constants;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @param Request $request
     * @return array
     */
    public function rules(Request $request)
    {
        return [
            "id" => "required|integer|min:1",
            "name" => Constants::DB_STRING,
            "surname" => Constants::DB_STRING,
            "email" => [
                "email",
                Constants::DB_STRING,
                Rule::unique('users')->ignore($request->input('id'))
            ],
            "password" => "confirmed",
        ];
    }
}

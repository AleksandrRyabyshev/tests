<?php

namespace App\Http\Requests\User;

use App\Constants;
use Illuminate\Foundation\Http\FormRequest;

class Store extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required" . Constants::DB_STRING,
            "surname" => "required" . Constants::DB_STRING,
            "email" => "required|email|unique:users" . Constants::DB_STRING,
            "password" => "required|confirmed",
        ];
    }
}

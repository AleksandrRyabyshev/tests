<?php

use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $current_time = Carbon::now();
        $users = [
            [
                'name' => 'Александр',
                'surname' => 'Ткач',
                'email' => 'tkach.aleksandr.s@gmail.com',
                'email_verified_at' => $current_time,
                'password' => Hash::make('123456'),
                'created_at' => $current_time,
                'updated_at' => $current_time,
            ],
            [
                'name' => 'Александр',
                'surname' => 'Рябышев',
                'email' => 'ryabushev.aleksandr.g@gmail.com',
                'email_verified_at' => $current_time,
                'password' => Hash::make('123456'),
                'created_at' => $current_time,
                'updated_at' => $current_time,
            ],
        ];

        foreach ($users as $id => $item) {
            $user = User::find(++$id);

            if (is_null($user)) {
                $user = new User();

                $user->id = $id;
                $user->fill($item);
                $user->save();
            }
        }
    }
}

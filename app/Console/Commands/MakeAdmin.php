<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class MakeAdmin extends Command
{
    protected $signature   = 'admin:make {email : Email pengguna yang akan dijadikan admin}';
    protected $description = 'Jadikan pengguna sebagai admin berdasarkan email';

    public function handle(): int
    {
        $email = $this->argument('email');
        $user  = User::where('email', $email)->first();

        if (!$user) {
            $this->error("Pengguna dengan email '{$email}' tidak ditemukan.");
            return self::FAILURE;
        }

        $user->role = 'admin';
        $user->save();

        $this->info("Berhasil! {$user->name} ({$email}) sekarang adalah admin.");
        return self::SUCCESS;
    }
}

<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->confirm('Do you want to add a new user?')) {
            $name = $this->ask("Name", "John Doe");
            $email = $this->ask("Email", "john@domain.com");
            $password = $this->secret('password');
            $passwordConfirmation = $this->secret('Confirm password');

            if ($password === $passwordConfirmation) {
                $user = new User();
                $user->name = $name;
                $user->email = $email;
                $user->password = Hash::make($password);
                $user->save();

                return $this->line($name . ' Has been added to the application');
            }

            return $this->error('The passwords don\'t mathch 😢');
        }

        return $this->warn('You have cancelled the command');
    }
}

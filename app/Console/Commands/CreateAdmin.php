<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

#[Description('Izveido sistēmas administratora kontu')]
#[Signature('app:create-admin')]
class CreateAdmin extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->ask('Lūdzu norādi e-pastu');

        $user = \App\Models\User::where('email', $email)->first();

        if (!$user) {
            $this->error('Lietotājs ar norādīto e-pastu neeksistē');
            return 1;
        }

        $user->assignRole('Sistēmas administrators');

        $this->info('Sistēmas administrators ir izveidots');

        return 0;
    }
}

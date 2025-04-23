<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
/*        DB::table('users')->insert([
            'nom' => 'Amara',
            'prenom' => 'Yassine',
            'telephone' => '0650022470',
            'email' => 'Global@gmail.com',
            'password' => Hash::make('123'),
            'nationalite' => 'marocain',
            'picture' => null,
            'role' => 'responsable global',
        ]);*/
        DB::table('users')->insert([
            'nom' => 'chbab',
            'prenom' => 'Mohamed',
            'telephone' => '0650022470',
            'email' => 'Departement@gmail.com',
            'password' => Hash::make('123'),
            'nationalite' => 'marocain',
            'picture' => null,
            'role' => 'responsable Departement',
        ]);
        DB::table('users')->insert([
            'nom' => 'lemimm',
            'prenom' => 'Hicham',
            'telephone' => '0650022470',
            'email' => 'Service@gmail.com',
            'password' => Hash::make('123'),
            'nationalite' => 'marocain',
            'picture' => null,
            'role' => 'responsable Service',
        ]);;
        DB::table('users')->insert([
            'nom' => 'idba',
            'prenom' => 'Mohamed',
            'telephone' => '0650022470',
            'email' => 'Tache@gmail.com',
            'password' => Hash::make('123'),
            'nationalite' => 'marocain',
            'picture' => null,
            'role' => 'responsable Tache',
        ]);
    }
}

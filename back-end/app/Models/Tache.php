<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tache extends Model
{
    use HasFactory;

    protected $fillable =[
        'titre',
        'status',
        'date_debut',
        'date_fin',
        'heure_debut',
        'heure_fin',
        'id_responsable',
        'id_service',
    ];
}

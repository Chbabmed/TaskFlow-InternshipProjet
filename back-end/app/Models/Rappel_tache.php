<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rappel_tache extends Model
{
    use HasFactory;

    protected $fillable =[
        'status',
        'date_due',
        'heure_rappel',
        'note',
        'id_tache',
        'id_responsable',
    ];
}

<?php

use App\Models\Organisation;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('departement', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->foreignId('id_responsable')->constrained('users')->onDelete('cascade');
            $table->foreignId('id_organisation')->constrained('organisations')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('departements');
    }
};

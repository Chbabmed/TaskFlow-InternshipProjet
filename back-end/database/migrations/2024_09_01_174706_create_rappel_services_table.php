<?php

use App\Models\Tache;
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
        Schema::create('rappel_services', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->date('date_due');
            $table->time('heure_rappel');
            $table->text('note');
            $table->foreignId('id_service')->constrained('services')->onDelete('cascade');
            $table->foreignId('id_responsable')->constrained('users')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rappel_services');
    }
};

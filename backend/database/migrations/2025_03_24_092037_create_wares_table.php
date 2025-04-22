<?php

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
        // todo should this be tied together with the categories? what are foreign keys?
        Schema::create('wares', function (Blueprint $table) {
            $table->id();
            $table->string('barcode');
            $table->string('name');
            $table->integer('quantity');
            $table->float('price');
            $table->integer('placement_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wares');
    }
};

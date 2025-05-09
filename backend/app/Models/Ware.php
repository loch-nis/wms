<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ware extends Model
{
    use HasFactory;
    protected $fillable = ['barcode', 'name', 'price', 'placement_id','quantity'];
}

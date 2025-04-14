<?php

namespace App\Http\Controllers;

use App\Models\Ware;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Helpers;

class WareController extends Controller
{

    public function store(Request $request) : JsonResponse
    {
        $validated = $request->validate([
                'barcode' => 'required|string|max:255',
                'name' => 'required|string|max:255',
                'quantity' => 'required|integer|min:0',
                'price' => 'required|numeric|min:0',
                'placement_id' => 'required|integer|min:0',
        ]);

        $ware = Ware::where('barcode', $validated['barcode'])->first();

        if($ware)
        {
            return response()->json(
                ['message' =>  'create ware failed as barcode already exists'],
                409 //409 Conflict
            );
        }



        $ware = Ware::create($validated);

        //Helpers\transportWaresViaConveyor($ware->quantity, $ware->placement_id);

        return response()->json([
            'message' => 'ware added successfully','ware' => $ware], 200);
    }



    public function update(Request $request, $barcode) : JsonResponse
    {
        $request->validate([
            'quantityDelta' => 'required|integer'
        ]);

        $ware = Ware::where('barcode', $barcode)->first();

        if($ware)
        {
            if($ware->quantity + $request->quantityDelta >= 0)
            {
                $ware->quantity += $request->quantityDelta;
                $ware->save();

                //Helpers\transportWaresViaConveyor($request->quantityDelta, $ware->placement_id);

                return response()->json(
                    [
                        'message' => 'Ware quantity successfully updated',
                        'updated information' => $ware
                    ],200
                );
            }
            else
            {
                return response()->json(
                    [
                        'message' => 'Ware quantity is not high enough to pack the requested amount',
                        'quantity' => $ware->quantity,
                        'requested' => $request->quantityDelta
                    ], 409 //409 means conflict, aka request can't be handled because internal conflict
                );
            }
        }
        else
        {
            return response()->json(
                [
                    'message' => 'Ware with requested barcode not found',
                    'barcode' => $barcode
                ], 404 //Not found
            );
        }
    }



    //use case 3: Se lagerstatus
    public function getAllWares() : JsonResponse
    {
        $wares = Ware::all();
        return response()->json($wares);
    }

    public function getWareByBarcode(Request $request, $barcode)
    {
        $ware = Ware::where('barcode', $barcode)->first();

        if($ware)
        {
            return response()->json($ware
            ,200
            );
        }
        else
        {
            return response()->json(
                [
                    'message' => 'Barcode not found in database',
                    'barcode' => $barcode
                ], 404 //Not found
            );
        }
    }
}


<?php

namespace App\Http\Controllers;

use App\Models\Ware;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StoreWareRequest;
use App\Http\Requests\UpdateWareRequest;
use App\Services\WareService;

class WareController extends Controller
{

    // Constructor Dependency Injection
    private WareService $wareService;

    public function __construct(WareService $wareService)
    {
        $this->wareService = $wareService;
    }


    // Controller Methods
    public function store(StoreWareRequest $request) : JsonResponse
    {
        $validated = $request->validated();

        $ware = $this->wareService->createWare($validated);

        return response()->json($ware, 201);
    }


    public function update(UpdateWareRequest $request, string $barcode) : JsonResponse
    {
        $validated = $request->validated();

        $ware = $this->wareService->updateWare($validated, $barcode);

        return response()->json($ware,200);
    }


    public function getAll() : JsonResponse
    {
        $wares = $this->wareService->getAll();

        return response()->json($wares, 200);
    }



    public function getByBarcode(string $barcode) : JsonResponse
    {
        $ware = $this->wareService->getByBarcode($barcode);

        return response()->json($ware,200);
    }


    public function delete(string $barcode) : JsonResponse
    {
        $ware = $this->wareService->delete($barcode);

        return response()->json($ware,200);
    }
}


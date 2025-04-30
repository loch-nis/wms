<?php
namespace App\Services;

use App\Models\Ware;
use Illuminate\Database\Eloquent\ModelNotFoundException;
//use App\Services\UartService;


class WareService
{
    private UartService $uartService;

    public function __construct(UartService $uartService)
    {
        $this->uartService = $uartService;
    }

    public function createWare($validatedData)
    {
        $ware = Ware::create($validatedData);

        $this->uartService->transportWaresViaConveyor($ware->quantity, $ware->placement_id);

        return $ware;
    }


    public function updateWare($validatedData, $barcode)
    {
        $ware = Ware::where('barcode', $barcode)->firstOrFail();

        $quantityDelta = $validatedData['quantityDelta'];

        $ware->quantity += $quantityDelta;
        $ware->save();

        $this->uartService->transportWaresViaConveyor($quantityDelta, $ware->placement_id);

        return $ware;
    }


    public function getAll()
    {
        return Ware::all();
    }

    public function getByBarcode($barcode)
    {
        return Ware::where('barcode', $barcode)->firstOrFail();
    }


}

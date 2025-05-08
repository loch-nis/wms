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

    public function createWare(array $validatedData)
    {
        $ware = Ware::create($validatedData);

        $this->uartService->transportWaresViaConveyor($ware->quantity, $ware->placement_id);

        return $ware;
    }


    public function updateWare(array $validatedData, string $barcode)
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

    public function getByBarcode(string $barcode)
    {
        return Ware::where('barcode', $barcode)->firstOrFail();
    }


    public function delete(string $barcode)
    {
        $ware = Ware::where('barcode', $barcode)->firstOrFail();

        $ware->delete();

        return $ware;
    }


}

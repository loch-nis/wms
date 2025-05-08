<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Ware;

class UpdateWareRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'quantityDelta' => [
                'required',
                'integer',
                'min:-1000',
                'max:1000',
                function ($attribute, $value, $fail) {
                    $ware = Ware::where('barcode', $this->route('barcode'))->firstOrFail();

                    $isValidQuantity = $ware->quantity + $value >= 0;

                    if (!$isValidQuantity) {
                        $fail('The quantity after the update cannot be less than 0.');
                    }
                },
            ]
        ];
    }
}

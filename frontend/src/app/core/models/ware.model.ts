// todo how should we structure our code?
// todo split by technical concerns vs features
export interface Ware {
    id: number,
    barcode: string,
    name: string,
    quantity: number,
    price: number,
    placement_id: number,
    created_at: string | null,
    updated_at: string | null,
  }

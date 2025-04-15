import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ware } from '../interfaces/ware';
import { WareItemService } from './ware-item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ware-item',
  imports: [CommonModule],
  templateUrl: './ware-item.component.html',
  styleUrl: './ware-item.component.scss'
})
export class WareItemComponent implements OnChanges
{

  @Input() barcode: string = "";
  @Input() ware: Ware | null = null;
  barcodeNotFound: boolean | null = null;
  
  constructor(private wareItemService : WareItemService ) {}

  ngOnChanges(): void 
  {
      this.wareItemService.getWareByBarcode(this.barcode).subscribe({
        next: (data) => {
          this.ware = data;
          this.barcodeNotFound = false;
        },
        error: (err) => {
          console.log(err);
          if (err.status === 404)
          {
            this.ware = null;
            this.barcodeNotFound = true;
          }
        }
      });
  }
}

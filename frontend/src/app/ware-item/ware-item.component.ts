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
  
  constructor(private WareItemService : WareItemService ) {}

  ngOnChanges(changes : SimpleChanges) : void 
  {
      const barcodeChanged = changes['barcode'];
      const wareChanged = changes['ware'];

      if(barcodeChanged)
        this.barcode = changes['barcode'].currentValue;
      if(wareChanged)
        this.ware = changes['ware'].currentValue;


      //if only the barcode is provided, get ware info

      //and also get ware info if barcode has been updated 
      //and it doesnt match our ware.barcode property
      const shouldGetWareByBarcode = this.barcode && 
      (!this.ware || 
      (barcodeChanged && this.barcode !== this.ware?.barcode
      ))


      if(shouldGetWareByBarcode)
      {
        this.WareItemService.getWareByBarcode(this.barcode).subscribe({
          next: (data) => {
            this.ware = data; 
            this.barcodeNotFound = false;
          },
          error: (err) => {
            console.log(err);
            if(err.status === 404) {
              this.ware = null;
              this.barcodeNotFound = true;
            }
          }

        });
      }
  }
}

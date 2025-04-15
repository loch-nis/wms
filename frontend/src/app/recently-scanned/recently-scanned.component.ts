import { Component, OnInit } from '@angular/core';
import { UpdateBarcodeService } from '../barcode-form/update-barcode.service';
import { WareItemComponent } from "../ware-item/ware-item.component";
import { CommonModule } from '@angular/common';
import { CreateWareFormComponent } from "../create-ware-form/create-ware-form.component";
import { UpdateWareFormComponent } from "../update-ware-form/update-ware-form.component";

@Component({
  selector: 'app-recently-scanned',
  imports: [WareItemComponent, CommonModule, CreateWareFormComponent, UpdateWareFormComponent],
  templateUrl: './recently-scanned.component.html',
  styleUrl: './recently-scanned.component.scss'
})
export class RecentlyScannedComponent implements OnInit{
  barcode : string | null = null;

  constructor(private updateBarcodeService: UpdateBarcodeService) {}
  
  ngOnInit(): void {
      this.updateBarcodeService.barcode$.subscribe((barcode) => {
        this.barcode = barcode;
        console.log("Barcode updated in recently scanned to:", barcode)
      })
  }

}

import { Component } from '@angular/core';
import { WareListComponent } from "../ware-list/ware-list.component";
import { BarcodeFormComponent } from "../barcode-form/barcode-form.component";
import { RecentlyScannedComponent } from "../recently-scanned/recently-scanned.component";

@Component({
  selector: 'app-dashboard',
  imports: [WareListComponent, BarcodeFormComponent, RecentlyScannedComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

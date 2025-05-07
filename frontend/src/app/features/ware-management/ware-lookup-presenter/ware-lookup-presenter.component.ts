import { Component, signal, effect, inject, input, ResourceStatus, model } from '@angular/core';
import { Ware } from '../../../core/models/ware.model';
import { BarcodeFormPresenterComponent } from '../barcode-form-presenter/barcode-form-presenter.component';
import { WareFormPresenterComponent } from '../ware-form-presenter/ware-form-presenter.component';
import { WareItemPresenterComponent } from '../ware-item-presenter/ware-item-presenter.component';
import { WareUpdateFormPresenterComponent } from '../../../shared/ware-update-form-presenter/ware-update-form-presenter.component';

@Component({
  selector: 'app-ware-lookup',
  imports: [BarcodeFormPresenterComponent, WareFormPresenterComponent,
     WareItemPresenterComponent, WareUpdateFormPresenterComponent],
  templateUrl: './ware-lookup-presenter.component.html',
  styleUrl: './ware-lookup-presenter.component.scss'
})
export class WareLookupPresenterComponent {
  barcode = model<string>("");
  ware = input<Ware | null | undefined>(undefined);
  wareLookupStatus = input< 'found' | 'notFound' | 'notSearched'>('notSearched');

  submitFunction = input<(formValue : any) => void>(() => {});
}

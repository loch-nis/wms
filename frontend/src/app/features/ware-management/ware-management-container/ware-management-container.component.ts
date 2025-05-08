import { Component, signal, inject, computed } from '@angular/core';
import { WareListPresenterComponent } from '../ware-list-presenter/ware-list-presenter.component';
import { WareLookupPresenterComponent } from '../ware-lookup-presenter/ware-lookup-presenter.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { WareService } from './ware.service';
import { Ware, WareUpdateAction, WareLookupStatus } from '../../../core/models/ware.model';

@Component({
  selector: 'app-dashboard',
  imports: [WareListPresenterComponent, WareLookupPresenterComponent],
  templateUrl: './ware-management-container.component.html',
  styleUrl: './ware-management-container.component.scss'
})
export class WareManagementContainerComponent {
  barcode = signal<string>("");
  
  lookedUpWare = computed<Ware | null>(() => {
    return this.lookedUpWareResource.hasValue() ? this.lookedUpWareResource.value() : null;
  });
  
  wareLookupStatus = computed<WareLookupStatus>(() => {
    if (this.barcode() === "")
      return 'notSearched';
    else if (this.lookedUpWare() === null)
      return 'notFound';
    else
      return 'found';
});

  wareList = computed<Ware[] | []>(() => {
    return this.wareListResource.hasValue() ? this.wareListResource.value() : []
  });


  private wareService = inject(WareService);

  lookedUpWareResource = rxResource({
    request: () => this.barcode(),
    loader: ({ request: barcode }) => 
      this.wareService.getByBarcode(barcode)
  });

  wareListResource = rxResource({
    loader: () =>
      this.wareService.getAll()
  });



  handleWareFormSubmit = (formValue : any) => {
    this.wareService.post(formValue).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
      }
    });
    // TODO error handling how??? I kinda don't want it here in the component, 
    // so I guess the wareService method should do that instead? Or perhaps not actually,
    // if I want the ui to update or a snackbar or smt to appear

  }


  handleWareUpdateFormSubmit = (action: WareUpdateAction, barcode: string, quantityDelta : number) => {
    if (action === "decreaseQuantity")
      quantityDelta *= -1;
    
    this.wareService.patch(barcode, quantityDelta).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
    }
    });
  }

  handleWareDeleteSubmit = (barcode: string) => {
    this.wareService.delete(barcode).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
      }
    });
  }




}

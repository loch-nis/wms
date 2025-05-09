import { Component, signal, inject, computed } from '@angular/core';
import { WareListPresenterComponent } from '../ware-list-presenter/ware-list-presenter.component';
import { WareLookupPresenterComponent } from '../ware-lookup-presenter/ware-lookup-presenter.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { WareService } from './ware.service';
import { Ware, WareUpdateAction, WareLookupStatus } from '../../../core/models/ware.model';
import { NotificationService } from '../../../core/services/notification.service';

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
    return this.wareListResource.hasValue() ? this.wareListResource.value() : [];
  });


  private wareService = inject(WareService);
  private notificationService = inject(NotificationService);

  
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
        this.notificationService.showSuccess("New ware successfully created");
      }
    });
  }


  handleWareUpdateFormSubmit = (action: WareUpdateAction, barcode: string, quantityDelta : number) => {
    if (action === "decreaseQuantity")
      quantityDelta *= -1;
    
    this.wareService.patch(barcode, quantityDelta).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
        this.notificationService.showSuccess("Ware successfully updated");
    }
    });
  }

  handleWareDeleteSubmit = (barcode: string) => {
    this.wareService.delete(barcode).subscribe({
      next: () => {
        this.wareListResource.reload();
        this.lookedUpWareResource.reload();
        this.notificationService.showSuccess("Ware successfully deleted");
      }
    });
  }


}

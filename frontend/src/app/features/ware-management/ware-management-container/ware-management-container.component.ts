import { Component, signal, effect, inject, computed } from '@angular/core';
import { Ware } from '../../../core/models/ware.model';
import { WareListPresenterComponent } from '../ware-list-presenter/ware-list-presenter.component';
import { WareLookupPresenterComponent } from '../ware-lookup-presenter/ware-lookup-presenter.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { ResourceStatus } from '@angular/core';
import { WareService } from './ware.service';

@Component({
  selector: 'app-dashboard',
  imports: [WareListPresenterComponent, WareLookupPresenterComponent],
  templateUrl: './ware-management-container.component.html',
  styleUrl: './ware-management-container.component.scss'
})
export class WareManagementContainerComponent {
  wares = signal<Ware[]>([]);

  barcode = signal<string>("");
  ware = signal<Ware | null | undefined>(undefined);
  wareLookupStatus = computed(() => 
  {
    if (this.ware() === undefined)
      return 'notSearched';
    else if (this.ware() === null)
      return 'notFound';
    else
      return 'found';
  })



  constructor() 
  {
    effect(() => {
      console.log("wareLookup effect triggered");

      if (this.barcode() == "") 
        return;

      // TODO make this more safe or something? - 
      // TODO actually I think the loader should just call a function (using pipe??)
      // TODO so we dont need effect. And maybe .then or something can be used so we dont have to check
      // TODO for resolved.

      // TODO add debouncing
      if (this.wareResource.status() === ResourceStatus.Error)
      {  
        this.ware.set(null);
      }
      else if (this.wareResource.status() === ResourceStatus.Resolved)
      {
        this.ware.set(this.wareResource.value());
      }
    });   
    
    effect(() => {
      console.log("wareList effect triggered");
      if (this.wareListResource.status() !== ResourceStatus.Resolved) return
      if (this.wareListResource.hasValue())
        this.wares.set(this.wareListResource.value());
    });
  }


  private wareService = inject(WareService);

  // TODO perhaps refactor this based on the above comments??
  wareResource = rxResource({
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
      next: () => this.wareListResource.reload()
    });
    // error handling how??? I kinda don't want it here in the component, 
    // so I guess the wareService method should do that instead? Or perhaps not actually,
    // if I want the ui to update or a snackbar or smt to appear

  }




}

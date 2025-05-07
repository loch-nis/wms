import {Component, input} from '@angular/core';
import { PatchWareService } from './patch-ware.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WareListUpdateService } from '../../features/ware-management/ware-list-presenter/ware-list-update.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-ware-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ware-update-form-presenter.component.html',
  styleUrl: './ware-update-form-presenter.component.scss'
})
export class WareUpdateFormPresenterComponent {
  action = input<"add" | "remove">("add");
  barcode = input<string>("");
  form: FormGroup;

  // TODO make dumb to match name OR change name if that cant be done..
  
  constructor(
    private formBuilder: FormBuilder,
    private patchWareService: PatchWareService,
    private wareListUpdateService: WareListUpdateService,
    private snackBar: MatSnackBar,
  )
  {
    this.form = this.formBuilder.group({
      quantity: [1,[Validators.required,Validators.min(1)]]
    });
  }
  
  // TODO move this service inside the components folder? 
  // TODO or what about the service attached??

  
  onSubmit()
  {
    if(this.form.invalid) return;

    let quantityDelta = this.form.value.quantity;

    if(this.action() === 'remove')
      quantityDelta *= -1;


    this.patchWareService.patchFormData(this.barcode(), {
      quantityDelta: quantityDelta
    }).subscribe(
      (response) => {

        console.log(response);

        this.snackBar.open("Ware successfully updated!", "Close", {
          duration: 1500
        });

        this.wareListUpdateService.triggerUpdate();
      }
    );


  }

}
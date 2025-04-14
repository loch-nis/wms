import { Component, Input } from '@angular/core';
import { PatchWareService } from './patch-ware.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WareListUpdateService } from '../ware-list/ware-list-update.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-ware-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-ware-form.component.html',
  styleUrl: './update-ware-form.component.scss'
})
export class UpdateWareFormComponent {
  form: FormGroup;

  //if set to false, the form will instead decrease the submitted quantity from the ware.
  @Input() forStoring : boolean = true;
  @Input() barcode : string = "";

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

  onSubmit()
  {
    if(this.form.invalid) return;

    let quantityDelta = this.form.value.quantity;

    if(!this.forStoring)
    {
      quantityDelta = quantityDelta * -1;
    }

    this.patchWareService.patchFormData(this.barcode, {
      quantityDelta: quantityDelta
    }).subscribe(
      (response) => {

        this.snackBar.open("Ware successfully updated!", "Close", {
          duration: 1500
        });

        //trigger update of the list
        this.wareListUpdateService.triggerUpdate();
      }
    );

    
  }

}

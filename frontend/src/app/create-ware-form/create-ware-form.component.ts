import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateWareService } from './create-ware.service';
import { CommonModule } from '@angular/common';
import { UpdateBarcodeService } from '../barcode-form/update-barcode.service';
import { WareListUpdateService } from '../ware-list/ware-list-update.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-ware-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-ware-form.component.html',
  styleUrl: './create-ware-form.component.scss'
})
export class CreateWareFormComponent implements OnInit {
  form: FormGroup;
  placementOptions = [0, 1, 2, 3, 4];
  private barcodeSubscription: Subscription | null = null;


  constructor(
    private formBuilder: FormBuilder,
    private createWareService: CreateWareService,
    private updateBarcodeService: UpdateBarcodeService,
    private wareListUpdateService: WareListUpdateService,
    private snackBar: MatSnackBar,
  ) 
  {
    this.form = this.formBuilder.group({
      barcode: ['', Validators.required],
      name: ['', Validators.required],
      price: [, [Validators.required, Validators.min(0)]],
      placement_id: [0, Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }
  
  onSubmit()
  {
    if(this.form.invalid) return;

    console.log(this.form.value);

    this.createWareService.postFormData(this.form.value).subscribe(
        (response) => {
          
          this.snackBar.open("New ware successfully created!", "Close", {
            duration: 3000
          });

          this.wareListUpdateService.triggerUpdate();
        }
      );
  }

  ngOnInit(): void {
      this.barcodeSubscription = this.updateBarcodeService.barcode$.subscribe((barcode) => {
        if (barcode)
          {
            this.form.patchValue({
              barcode: barcode
            });
          }
      });
  }

  // I did try with async pipe but that didn't work quite as intended,
  // so I have to clean up the observable:
  ngOnDestroy(): void {
    if (this.barcodeSubscription) {
      this.barcodeSubscription.unsubscribe();
    }
  }

}

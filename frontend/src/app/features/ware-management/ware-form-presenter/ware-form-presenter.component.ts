import { Component, effect, input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-ware-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ware-form-presenter.component.html',
  styleUrl: './ware-form-presenter.component.scss'
})
export class WareFormPresenterComponent{
  barcode = input<string>("");
  submitWareFunction = input<(formValue : any) => void>(() => {});
  syncBarcodeField = effect(() => {
      this.form.patchValue({
        barcode: this.barcode()
      });
    });

  readonly placementOptions = [1, 2, 3, 4, 5];

  private formBuilder = inject(FormBuilder);

  form: FormGroup = this.formBuilder.group({
      barcode: ['', Validators.required],
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      placement_id: [1, Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });


  onSubmit()
  {
    if(this.form.invalid) return;

    this.submitWareFunction()(this.form.value);
  }
}

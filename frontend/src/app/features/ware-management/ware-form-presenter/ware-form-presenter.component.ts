import { Component, effect, input } from '@angular/core';
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

  form: FormGroup;
  placementOptions = [1, 2, 3, 4, 5];

  constructor(
    private formBuilder: FormBuilder,
  )
  {
    this.form = this.formBuilder.group({
      barcode: ['', Validators.required],
      name: ['', Validators.required],
      price: [, [Validators.required, Validators.min(0)]],
      placement_id: [1, Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });

    effect(() => {
      this.form.patchValue({
        barcode: this.barcode()
      });
    })
  }

  onSubmit()
  {
    if(this.form.invalid) return;

    this.submitWareFunction()(this.form.value);
  }
}

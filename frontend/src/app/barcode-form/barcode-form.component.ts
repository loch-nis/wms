import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { updateBarcode } from './update-barcode.service';
import { debounceTime, filter } from 'rxjs';



@Component({
  selector: 'app-barcode-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './barcode-form.component.html',
  styleUrl: './barcode-form.component.scss'
})
export class BarcodeFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private updateBarcode: updateBarcode,
  )
  {
    this.form = this.formBuilder.group({
      barcode: ['',Validators.required]
    });
  }

  ngOnInit(): void {
      this.form.get('barcode')!.valueChanges.pipe(
        debounceTime(200),
        filter(() => this.form.valid)
      ).subscribe(() => {
        this.onSubmit();
      })
  }


  onSubmit()
  {
    if(this.form.invalid) return;

    this.updateBarcode.setBarcode(this.form.value.barcode);
  }
}

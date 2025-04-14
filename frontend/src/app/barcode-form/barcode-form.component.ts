import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRecentlyScannedService } from '../recently-scanned/update-recently-scanned.service';
import { TransferBarcodeValue } from './transfer-barcode-value.service';
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
    private updateRecentlyScannedService: UpdateRecentlyScannedService,
    private transferBarcodeValue: TransferBarcodeValue,
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

    this.transferBarcodeValue.setBarcodeValue(this.form.value.barcode);

    this.updateRecentlyScannedService.setBarcode(this.form.value.barcode);
  }
}

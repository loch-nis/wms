import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBarcodeService } from './update-barcode.service';
import { debounceTime, filter } from 'rxjs';



@Component({
  selector: 'app-barcode-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './barcode-form.component.html',
  styleUrl: './barcode-form.component.scss'
})
export class BarcodeFormComponent implements OnInit {
  form: FormGroup;

  // todo are there other ways to do DI in angular?
  constructor(
    private formBuilder: FormBuilder,
    private updateBarcodeService: UpdateBarcodeService,
  )
  {
    // todo what is declarative code?
    this.form = this.formBuilder.group({
      barcode: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    // todo is null supression good? what alternatives do we have?
    // todo are there other ways of getting controls in a form than .get('')?
      this.form.get('barcode')!.valueChanges.pipe(
        debounceTime(200),
        filter(() => this.form.valid)
      ).subscribe(() => {
        this.onSubmit();
      })
  }


  // todo is this a smart of a dumb component? what are pros and cons of the two?
  onSubmit()
  {
    if(this.form.invalid) return;

    this.updateBarcodeService.setBarcode(this.form.value.barcode);
  }
}

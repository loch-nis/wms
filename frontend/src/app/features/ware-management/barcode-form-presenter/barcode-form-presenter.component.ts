import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-barcode-form',
  imports: [ FormsModule ],
  templateUrl: './barcode-form-presenter.component.html',
  styleUrl: './barcode-form-presenter.component.scss'
})
export class BarcodeFormPresenterComponent {
  barcode = model<string>("");
}

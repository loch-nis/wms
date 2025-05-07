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
  // todo are there other ways to do DI in angular?
  // TODO Nis: use inject somewhere else it makes sense!



  // todo what is declarative code? - 
  // TODO Nis: evt. gennemgå koden til sidst



}

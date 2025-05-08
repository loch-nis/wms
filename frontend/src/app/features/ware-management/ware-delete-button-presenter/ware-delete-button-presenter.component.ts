import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ware-delete-button',
  imports: [FormsModule],
  templateUrl: './ware-delete-button-presenter.component.html',
  styleUrl: './ware-delete-button-presenter.component.scss'
})
export class WareDeleteButtonPresenterComponent {
  barcode = input<string>("");
  submitFunction = input<(barcode: string) => void>(() => {});

  onSubmit()
  {
    this.submitFunction()(this.barcode());
  }
}
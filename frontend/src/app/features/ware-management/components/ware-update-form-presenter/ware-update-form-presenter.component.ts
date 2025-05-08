import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WareUpdateAction } from '../../../../core/models/ware.model';

@Component({
  selector: 'app-update-ware-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './ware-update-form-presenter.component.html',
  styleUrl: './ware-update-form-presenter.component.scss'
})
export class WareUpdateFormPresenterComponent {
  barcode = input<string>("");
  action = input<WareUpdateAction>("increaseQuantity");
  submitFunction = input<(action: WareUpdateAction, barcode: string, quantityDelta: number) => void>(() => {});

  quantityDelta = 1;
  
  onSubmit()
  {
    this.submitFunction()(this.action(), this.barcode(), this.quantityDelta);
  }

}
import { Component, input } from '@angular/core';
import { Ware, WareUpdateAction } from '../../../core/models/ware.model';
import { CommonModule } from '@angular/common';
import { WareUpdateFormPresenterComponent } from '../components/ware-update-form-presenter/ware-update-form-presenter.component';
import { WareDeleteButtonPresenterComponent } from "../ware-delete-button-presenter/ware-delete-button-presenter.component";

@Component({
  selector: 'app-ware-list',
  imports: [CommonModule, WareUpdateFormPresenterComponent, WareDeleteButtonPresenterComponent],
  templateUrl: './ware-list-presenter.component.html',
  styleUrl: './ware-list-presenter.component.scss'
})
export class WareListPresenterComponent{
  wares = input<Ware[]>([]);
  submitWareUpdateFunction = input<(action: WareUpdateAction, barcode: string, quantityDelta: number) => void>(() => {});
  submitWareDeleteFunction = input<(barcode: string) => void>(() => {});
}

import {Component, input} from '@angular/core';
import { Ware, WareLookupStatus } from '../../../core/models/ware.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ware-item',
  imports: [CommonModule],
  templateUrl: './ware-item-presenter.component.html',
  styleUrl: './ware-item-presenter.component.scss'
})
export class WareItemPresenterComponent
{
  lookedUpWare = input<Ware | null>(null);
  wareLookupStatus = input<WareLookupStatus>('notSearched');
}

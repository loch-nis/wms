import {Component, input} from '@angular/core';
import { Ware } from '../../../core/models/ware.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ware-item',
  imports: [CommonModule],
  templateUrl: './ware-item-presenter.component.html',
  styleUrl: './ware-item-presenter.component.scss'
})
export class WareItemPresenterComponent
{
  ware = input<Ware | null | undefined>(undefined);
  wareLookupStatus = input< 'found' | 'notFound' | 'notSearched'>('notSearched');
}

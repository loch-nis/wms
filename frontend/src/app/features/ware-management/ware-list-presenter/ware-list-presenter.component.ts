import { Component, OnInit, input } from '@angular/core';
import { Ware } from '../../../core/models/ware.model';
import { WareListService } from './ware-list.service';
import { CommonModule } from '@angular/common';
import { WareUpdateFormPresenterComponent } from '../../../shared/ware-update-form-presenter/ware-update-form-presenter.component';
import { WareListUpdateService } from './ware-list-update.service';

@Component({
  selector: 'app-ware-list',
  imports: [CommonModule, WareUpdateFormPresenterComponent],
  templateUrl: './ware-list-presenter.component.html',
  styleUrl: './ware-list-presenter.component.scss'
})
export class WareListPresenterComponent{// implements OnInit {
  wares = input<Ware[]>([]);
/*
  constructor(
    private wareListService : WareListService,
    private wareListUpdateService: WareListUpdateService,
  ) {}

  loadWares() : void
  {
    this.wareListService.getAllWares().subscribe((data) => {
      this.wares = data;
      });
  }

  ngOnInit(): void 
  {
    this.loadWares();

    this.wareListUpdateService.update$.subscribe(() => {
      this.loadWares();
    });
  }

*/
}

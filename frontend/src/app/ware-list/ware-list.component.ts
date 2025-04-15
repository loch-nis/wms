import { Component, OnInit } from '@angular/core';
import { WareItemComponent } from "../ware-item/ware-item.component";
import { Ware } from '../interfaces/ware';
import { WareListService } from './ware-list.service';
import { CommonModule } from '@angular/common';
import { UpdateWareFormComponent } from "../update-ware-form/update-ware-form.component";
import { WareListUpdateService } from './ware-list-update.service';

@Component({
  selector: 'app-ware-list',
  imports: [CommonModule, UpdateWareFormComponent], // WareItemComponent
  templateUrl: './ware-list.component.html',
  styleUrl: './ware-list.component.scss'
})
export class WareListComponent implements OnInit {
  wares: Ware[] = [];

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


}

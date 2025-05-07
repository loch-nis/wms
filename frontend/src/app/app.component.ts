import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WareManagementContainerComponent } from "./features/ware-management/ware-management-container/ware-management-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WareManagementContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

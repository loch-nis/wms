import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  showSuccess(message: string = "Success!") : void
  {
    this.snackBar.open(message, "Close", {
      duration: 1500
      });
  }

  showError(message: string) : void
  {
    this.snackBar.open(message, "Close", {
          duration: 4000
          });
  }

}

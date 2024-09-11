import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private toggleSidenavSource = new Subject<void>();
  
  // Observable for the sidenav toggle event
  toggleSidenav$ = this.toggleSidenavSource.asObservable();

  // Method to trigger the toggle event
  toggleSidenav() {
    this.toggleSidenavSource.next();
  }
}

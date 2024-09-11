import { Component, ViewChild } from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { Subscription } from 'rxjs';
import { MaterialService } from '../services/material.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,MatFormFieldModule, MatSelectModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  showFiller = false;

  @ViewChild('drawer', { static: false }) drawer!: MatDrawer; // Reference to the drawer
  private subscription!: Subscription;

  constructor(private sidenavService: MaterialService) {}

  ngOnInit() {
    // Subscribe to the toggle event from the service
    this.subscription = this.sidenavService.toggleSidenav$.subscribe(() => {
      this.drawer.toggle();
    });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

} 

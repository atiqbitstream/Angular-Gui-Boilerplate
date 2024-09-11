import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MaterialService } from '../services/material.service';


@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatSidenavModule],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.css'
})
export class TopnavComponent {

  constructor(private sidenavService: MaterialService) {}

  // Method to toggle the sidenav when the menu button is clicked
  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

}

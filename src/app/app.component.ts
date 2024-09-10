import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopnavComponent,SidenavComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'layoutWebApp';
}

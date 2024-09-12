import { Component } from '@angular/core';
import { FeaturesComponent } from "../top-section/features/features.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

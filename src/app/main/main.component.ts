import { Component } from '@angular/core';
import { FeaturesComponent } from "../top-section/features/features.component";
import { IssuesComponent } from "../top-section/issues/issues.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FeaturesComponent, IssuesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

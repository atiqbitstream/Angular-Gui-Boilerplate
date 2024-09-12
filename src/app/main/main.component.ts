import { Component } from '@angular/core';
import { FeaturesComponent } from "../top-section/features/features.component";
import { IssuesComponent } from "../top-section/issues/issues.component";
import { SummaryComponent } from '../top-section/summary/summary.component';
import { OverdueComponent } from '../top-section/overdue/overdue.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FeaturesComponent, IssuesComponent,SummaryComponent,OverdueComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}

import { Component, OnInit } from '@angular/core';
import { PheadComponent } from './phead/phead.component';
import { ReferenzComponent } from './referenz/referenz.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PheadComponent, ReferenzComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects: string[] = ['Join', 'Pokedex', 'Sharkie','DaBubble']; 
}

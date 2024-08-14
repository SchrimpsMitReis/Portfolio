import { Component, OnInit } from '@angular/core';
import { PheadComponent } from './phead/phead.component';
import { ReferenzComponent } from './referenz/referenz.component';
import { CommonModule } from '@angular/common';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PheadComponent, ReferenzComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit{

  projects: Project[] = []; 
  
  constructor(private projectService: ProjectService){

  }


  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-info-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-frame.component.html',
  styleUrl: './info-frame.component.scss'
})
export class InfoFrameComponent implements OnInit {

  @Input() index!: number;
  evenIndex: boolean = false;
  ownProject!: Project;
  ownKnowledge!: string;
  constructor(private projectService: ProjectService){
    
  }
  ngOnInit(): void {
    this.evenIndex = this.index % 2 === 0;
    this.ownProject = this.projectService.getProjects()[this.index]
    this.ownKnowledge = this.getKnowledge(this.ownProject)
    
  }
  getKnowledge(project: Project){
    let textOutput: string = ""
    for (let i = 0; i < project.knowledge.length; i++) {
      textOutput += project.knowledge[i];
      if (project.knowledge.length  == i + 1){
      }else{
        textOutput += " | ";
      }
    }
    return textOutput
  }
}

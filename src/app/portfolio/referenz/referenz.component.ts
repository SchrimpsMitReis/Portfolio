import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-referenz',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './referenz.component.html',
  styleUrl: './referenz.component.scss'
})
export class ReferenzComponent implements OnInit{
  @Input() projIndex!: number;
  @Input() projectData!:Project;
  @Input() arrayLenth!: number;

  imageSrc!:string;
  indexToFrame!: number;
  width!: number;
  height!: number;
  projectNumber!: string;
  test!: string;
  direction!: boolean;
  knowledge!: string;
  title!: string;
  gitURL!: string;
  description!: string;
  projectsLength!: string;
  evenIndex!: boolean;
  index!: number;
  href!: string;
  
  ngOnInit(){
    this.index = this.projIndex;
    this.direction = this.projIndex%2 === 0;
    this.fromProData()
    this.counterNumbers()
    this.switchDirection()
    this.href = this.getProjectHref()
  }
  formatNumber(number: number) : string{
    return number.toString().padStart(2, '0');
  }
  switchDirection(){
    if (this.direction){
      this.test = "switchDirec" 
    }
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
  fromProData(){
    this.description = this.projectData.descriptionGer;
    this.title = this.projectData.title;
    this.gitURL = this.projectData.gitLink;
    this.knowledge = this.getKnowledge(this.projectData)
    this.imageSrc = `./assets/images/${this.projectData.title.toLowerCase()}Project.png`;
  }
  counterNumbers(){
    this.projectNumber = this.formatNumber(this.projIndex + 1)
    this.projectsLength = this.formatNumber(this.arrayLenth)
  }
  getProjectHref(){
    return `https://roman-schroeder.com/${this.projectData.title.toLowerCase()}/index.html`
  }
  getLang(){
    return navigator.language;
  }
  getDescription(){
    return (this.getLang() === 'de') ? this.projectData.descriptionGer : this.projectData.descriptionEng;
  }
}

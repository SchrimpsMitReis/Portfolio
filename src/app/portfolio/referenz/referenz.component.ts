import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InfoFrameComponent } from './info-frame/info-frame.component';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-referenz',
  standalone: true,
  imports: [CommonModule, InfoFrameComponent],
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
  
  ngOnInit(){
    this.direction = this.projIndex%2 === 0;
    this.fromProDa()
    this.counterNumbers()
    this.switchDirection()
    this.setBackgroundImage(this.imageSrc)
  }
  setBackgroundImage(imageUrl: string) {
    const backgroundElement = document.querySelector('.bgImage') as HTMLElement;
    
    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
    console.log("Background Element", backgroundElement.style.backgroundImage);
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
  fromProDa(){
    this.description = this.projectData.description;
    this.title = this.projectData.title;
    this.gitURL = this.projectData.gitLink;
    this.knowledge = this.getKnowledge(this.projectData)
    this.imageSrc = `"./assets/images/${this.projectData.title.toLowerCase()}Project.png"`;
  }
  counterNumbers(){
    this.projectNumber = this.formatNumber(this.projIndex + 1)
    this.projectsLength = this.formatNumber(this.arrayLenth)
  }
}

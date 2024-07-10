import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InfoFrameComponent } from './info-frame/info-frame.component';

@Component({
  selector: 'app-referenz',
  standalone: true,
  imports: [CommonModule, InfoFrameComponent],
  templateUrl: './referenz.component.html',
  styleUrl: './referenz.component.scss'
})
export class ReferenzComponent implements OnInit{
  @Input() projIndex!: number;
  @Input() projectName!:string;
  @Input() arrayLenth!: number;
  imageSrc!:string;
  width!: number;
  height!: number;
  projectNumber!: string;
  test!: string;
  projectsLength!: string;
  ngOnInit(){
    this.imageSrc = `./assets/images/${this.projectName}Project.png`;
    this.projectNumber = this.formatNumber(this.projIndex + 1)
    this.projectsLength = this.formatNumber(this.arrayLenth)
    this.switchDirection()
    
  }

  formatNumber(number: number) : string{
    return number.toString().padStart(2, '0');
  }
  switchDirection(){
    if (this.projIndex%2 === 0){
      this.test = "switchDirec" 
    }
  }
}

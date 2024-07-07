import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-referenz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referenz.component.html',
  styleUrl: './referenz.component.scss'
})
export class ReferenzComponent implements OnInit{

  @Input() projectName!:string;
  imageSrc!:string;
  width!: number;
  height!: number;
  ngOnInit(){
    this.imageSrc = `./assets/images/${this.projectName}Project.png`;
    
  }
}

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
  @Input() proj:string = "";
  name!: string;
  
  ngOnInit(): void {
    this.name = this.proj;
  }
}

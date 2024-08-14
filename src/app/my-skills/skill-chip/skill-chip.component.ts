import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-chip',
  standalone: true,
  imports: [],
  templateUrl: './skill-chip.component.html',
  styleUrl: './skill-chip.component.scss'
})
export class SkillChipComponent implements OnInit {
  @Input() prog: string = '';


  name!:string ;
  img!:string;


  ngOnInit(): void {
    this.name = this.capitalizeFirstLetter(this.prog);
    this.img = this.prog.toLowerCase()
  }

  
  capitalizeFirstLetter(string:string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}

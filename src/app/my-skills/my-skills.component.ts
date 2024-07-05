import { Component } from '@angular/core';
import { SkillChipComponent } from './skill-chip/skill-chip.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule,SkillChipComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {


  skills: string[] = ['Angular', 'TypeScript' ,'JavaScript', 'HTML', 'CSS', 'firebase', 'git' , 'scrum', 'materialdesign', 'photoshop', 'aftereffects', 'premiere', 'powerpoint', 'c++'];


}

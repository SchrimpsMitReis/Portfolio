import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  callToAction(){
    console.log("Send Nudes!");
    
  }
}

import { Component, OnChanges } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuSwitch } from '../services/menuSwitch.service';
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent implements OnChanges{

  constructor(private menuSwitch: MenuSwitch){}

  showMenuTopic: boolean = false;

  ngOnChanges(){
    this.showMenuTopic = this.menuSwitch.getSwitch()
  }
  callToAction(){
    console.log("Send Nudes!");
    
  }
}

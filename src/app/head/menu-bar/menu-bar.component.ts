import { Component } from '@angular/core';
import { MenuSwitch } from '../../services/menuSwitch.service';
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  constructor(private menuSwitch: MenuSwitch){}


}

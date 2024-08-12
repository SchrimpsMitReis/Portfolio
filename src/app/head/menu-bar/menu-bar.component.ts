import { Component } from '@angular/core';
import { MenuSwitch } from '../../services/menuSwitch.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  constructor(private menuSwitch: MenuSwitch){}


}

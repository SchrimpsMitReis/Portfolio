import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MenuSelectionComponent } from './menu-selection/menu-selection.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { MenuBarComponent } from '../head/menu-bar/menu-bar.component';

@Component({
  selector: 'app-menu-overlay',
  standalone: true,
  imports: [
    NavComponent,
    MenuSelectionComponent,
    MenuFooterComponent,
    MenuBarComponent
  ],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent {

}

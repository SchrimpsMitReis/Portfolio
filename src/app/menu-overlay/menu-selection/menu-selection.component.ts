import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-selection',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-selection.component.html',
  styleUrl: './menu-selection.component.scss'
})
export class MenuSelectionComponent {

}

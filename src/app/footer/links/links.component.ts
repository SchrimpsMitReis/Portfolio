import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}

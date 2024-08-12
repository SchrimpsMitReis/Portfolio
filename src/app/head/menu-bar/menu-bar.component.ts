import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() visibility: boolean = true;
  lastScroll: number = 0;
  @HostListener('mousemove', ['$event'])

  onMouseMove(event: MouseEvent) {
    if (event && window.innerWidth >= 1000) {
      this.visibility = true;

    }
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollTop = window.scrollY
    if (scrollTop > this.lastScroll) {
      this.visibility = false;

    } else {
      this.visibility = true;

    }
    this.lastScroll = scrollTop
  }
}

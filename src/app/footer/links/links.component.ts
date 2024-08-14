import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

  constructor(private router: Router) {
    
  }

  navigateToID(id: string, offset: number = 0) {
    let page = this.findID(id)
    this.router.navigate([`/${page}`]).then(() => {
      setTimeout(() => {
        this.scrollToElement(id, offset)
      }, 100);
    })
  }

  findID(id: string) {
    let routePath: any = this.router.config;   
    for (let i = 0; i < routePath.length; i++) {
      const pageRoute = routePath[i];
      for (let j = 0; j < pageRoute['component']['ɵcmp']['consts'].length; j++) {
        const singleId = pageRoute['component']['ɵcmp']['consts'][j][1];
        if (singleId === id) {
          return routePath[i]['path']
        }
      }
    }
    return console.error(`There is no id='${id}' on this page! Check this Function`);

  }

  private scrollToElement(elementId: string, offset: number) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

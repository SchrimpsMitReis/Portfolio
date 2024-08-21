import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-menu-selection',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink],
  templateUrl: './menu-selection.component.html',
  styleUrl: './menu-selection.component.scss'
})
export class MenuSelectionComponent {

  contactOffset:number = this.respContactOffset();
  constructor(private router: Router){}

  navigateToID(id: string, offset: number = 0) {
    console.log(this.contactOffset);
    
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

  respContactOffset():number{

    let offset: number = -200;

    if (window.innerWidth <= 360){
      offset = -60;
    }

    console.log(window.innerWidth);
    
    
    
        
    
    return offset
  }
}

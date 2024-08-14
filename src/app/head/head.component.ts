import { Component, OnChanges, HostListener } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuSwitch } from '../services/menuSwitch.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [MenuBarComponent, CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent implements OnChanges{
  constructor(private menuSwitch: MenuSwitch, private router: Router){}
  showMenuTopic: boolean = false;


  ngOnChanges(){
    this.showMenuTopic = this.menuSwitch.getSwitch();
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

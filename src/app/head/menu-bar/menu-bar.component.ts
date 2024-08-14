import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';
// import { routes } from '../../app.routes';
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})


export class MenuBarComponent implements OnInit {

  @Input() visibility: boolean = true;
  @Input() targetInput: string = 'menu';
  lastScroll: number = 0;
  targetOutput!: string;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.targetOutput = this.targetInput;

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


  navigateAndScroll(target: string, offset: number = 0) {
    const currentUrl = this.router.url;
    if (currentUrl === '/' || currentUrl.startsWith('/#')) {
      this.scrollToElement(target, offset);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(target, offset);
        }, 100);
      });
    }
  }


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

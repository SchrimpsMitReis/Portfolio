import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  language!: any;
  text!: string;
  actionBtn!:string;
  actionBtnGer:string = "Reden wir!";
  actionBtnEng:string = "Let Talk!";

  deutsch: string = `Hi, ich bin Roman Schröder, ein kreativer und logikbegeisterter Profi aus Remagen. 
  Mit einem Bachelor in Digital Film Making, spezialisiert auf Postproduktion und Inklusion, sowie einer Weiterbildung zum Frontend Developer, 
  bringe ich eine einzigartige Mischung aus Kreativität und technischem Know-how mit.
  Ich freue mich darauf, meine Reise fortzusetzen und bin gespannt auf neue Herausforderungen und Möglichkeiten, bei denen ich meine vielfältigen Fähigkeiten einbringen kann.`
  
  english: string = `Hi, my name is Roman Schröder, a creative and logic-driven professional from Remagen. 
  Holding a Bachelor's degree in Digital Film Making with a specialization in Postproduction and Inclusion, 
  along with additional training as a Frontend Developer, I bring a unique blend of creativity and technical 
  expertise. I am excited to continue my journey and look forward to new challenges and opportunities where I 
  can apply my diverse skill set.`

  constructor(private router: Router) {
    
  }


  ngOnInit() {
    this.language = navigator.language;
    this.setLang()
  }
  

  setLang(){
    if (this.language === "de"){
      this.actionBtn = this.actionBtnGer;
      this.text = this.deutsch;
    }
    else{
      this.text = this.english;
      this.actionBtn = this.actionBtnEng;
    }
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

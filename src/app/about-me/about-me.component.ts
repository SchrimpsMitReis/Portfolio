import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  deutsch: string = `Hi, ich bin Roman Schröder, ein kreativer und logikbegeisterter Profi aus Remagen. 
  Mit einem Bachelor in Digital Film Making, spezialisiert auf Postproduktion und Inklusion, sowie einer Weiterbildung zum Frontend Developer, 
  bringe ich eine einzigartige Mischung aus Kreativität und technischem Know-how mit.
  Ich freue mich darauf, meine Reise fortzusetzen und bin gespannt auf neue Herausforderungen und Möglichkeiten, bei denen ich meine vielfältigen Fähigkeiten einbringen kann.`

  ngOnInit() {
    this.language = navigator.language;
    this.setLang()
    console.log(this.language);
  }

  setLang(){
    if (this.language === "de"){
      this.text = this.deutsch;

    }
  }



  // Mögliche sprachen "de", "en-US", "en"
}

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
  english: string = `Hi, my name is Roman Schröder, a creative and logic-driven professional from Remagen. Holding a Bachelor's degree in Digital Film Making with a specialization in Postproduction and Inclusion, along with additional training as a Frontend Developer, I bring a unique blend of creativity and technical expertise. I am excited to continue my journey and look forward to new challenges and opportunities where I can apply my diverse skill set.`
  ngOnInit() {
    this.language = navigator.language;
    this.setLang()
  }
  
  setLang(){
    console.log(this.language);
    if (this.language === "de"){
      
      this.text = this.deutsch;
    }
    else{
      this.text = this.english;
      console.log("Pip");

    }
  }



  // Mögliche sprachen "de", "en-US", "en"
}

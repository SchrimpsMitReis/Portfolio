import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phead',
  standalone: true,
  imports: [],
  templateUrl: './phead.component.html',
  styleUrl: './phead.component.scss'
})
export class PheadComponent implements OnInit {
  language!: string;
  text!: string;
  deutsch: string = `In meiner Karriere habe ich an verschiedenen spannenden Projekten gearbeitet. Zu meinen wichtigsten Filmprojekten gehören "Kunst bewegt" und "Sinzig Inklusiv", die beide meine Leidenschaft für Inklusion und kreatives Storytelling widerspiegeln. Im Bereich Frontend-Entwicklung habe ich das Browser Game "Sharkie", die API-gestützte Website "Pokedex" und die LudumDare-Wettbewerbseinreichung "Perfect Pizza Pinball" realisiert. Seit 2010 habe ich zudem den Online Shop "Perlando" aufgebaut und bearbeitet.`
  english: string = `Throughout my career, I have worked on various exciting projects. Among my most significant film projects are "Kunst bewegt" and "Sinzig Inklusiv," both of which reflect my passion for inclusion and creative storytelling. In the field of frontend development, I have created the browser game "Sharkie," the API-supported website "Pokedex," and the LudumDare competition entry "Perfect Pizza Pinball." Additionally, since 2010, I have developed and managed the online shop "Perlando."`
  ngOnInit(): void {
    this.language = this.getLang()
    this.setText()
  }
  getLang(): string{
    return navigator.language;
  }
  setText(){
    if (this.language === 'de') {
      this.text = this.deutsch
    }else{
      this.text = this.english;
    }
  }
}

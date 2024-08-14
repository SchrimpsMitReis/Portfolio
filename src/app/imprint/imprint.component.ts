import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../head/menu-bar/menu-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [MenuBarComponent, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{

  content!: string;
  contentGer: string = /*html*/`
        <!-- Impressum -->
    <div class="section" id="impressum">
        <h1 >Impressum</h1>
        <p><strong>Inclufilm</strong></p>
        <p>Siebengebirgsweg 10<br>53424 Remagen<br>Deutschland</p>
        <p><strong>Vertreten durch:</strong><br>Roman Schröder</p>
        <p><strong>Kontakt:</strong><br>
        E-Mail: <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder&#64;inclufilm.com</a><br>
        Telefon: 015141684778</p>
        <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
        Roman Schröder<br>
        Siebengebirgsweg 10<br>53424 Remagen</p>
    </div>
  `;
  contentEng: string = /*html*/`
    <!-- Imprint -->
    <div class="section" id="imprint">
            <h1>Imprint</h1>
            <p><strong>Inclufilm</strong></p>
            <p>Siebengebirgsweg 10<br>53424 Remagen<br>Germany</p>
            <p><strong>Represented by:</strong><br>Roman Schröder</p>
            <p><strong>Contact:</strong><br>
            Email: <a href="mailto:roman.schroeder@inclufilm.com">roman.schroeder@inclufilm.com</a><br>
            Phone: 015141684778</p>
            <p><strong>Responsible for the content according to § 55 Abs. 2 RStV:</strong><br>
            Roman Schröder<br>
            Siebengebirgsweg 10<br>53424 Remagen</p>
        </div>

  `;

  ngOnInit(): void {
    this.setLang()
  }


  getLang(): boolean{
    return navigator.language == 'de'
  }

  
  setLang(): void{
    this.content = (this.getLang()) ? this.contentGer : this.contentEng;
  }
}

import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FooterComponent } from '../footer/footer.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeadComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}

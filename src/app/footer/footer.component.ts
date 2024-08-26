import { Component, Input } from '@angular/core';
import { FormularComponent } from './formular/formular.component';
import { LinksComponent } from './links/links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormularComponent, LinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() seeFormFooter: boolean = false;
}

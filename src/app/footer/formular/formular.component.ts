import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {

  contactData = {
    name: "",
    email: "",
    text: "",
    policy: false
  }

  onSubmit(){
    console.log(this.contactData);
    
  }
}

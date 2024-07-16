import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

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

  onSubmit(ngForm: NgForm) {
    if (this.contactData.policy) {
      if (ngForm.valid && ngForm.submitted) {
        console.log(ngForm);
        
      }

    }else{
      alert("You have Accept the Policy")
    }
  }
  clearInputs() {
    this.contactData = {
      name: "",
      email: "",
      text: "",
      policy: false
    }
  }
}

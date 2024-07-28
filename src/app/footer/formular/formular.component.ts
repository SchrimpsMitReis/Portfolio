import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})
export class FormularComponent {

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    text: "",
    policy: false
  }

  mailTest = false;

  post = {
    endPoint: 'http://roman-schroeder.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/html',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.contactData.policy) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
  
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  
        ngForm.resetForm();
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

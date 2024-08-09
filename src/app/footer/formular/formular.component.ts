import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule, DisclaimerComponent],
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent{

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    text: "",
    policy: false
  }

  @ViewChild('disclaimer') disclaimer!: DisclaimerComponent;

  mailTest = false;

  post = {

    endPoint: 'https://www.roman-schroeder.com/sendMail.php',
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
            complete: () => {
              console.info('send post complete'),
              this.disclaimer.show()
            }
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
  onDisclaimerClosed(){}
}

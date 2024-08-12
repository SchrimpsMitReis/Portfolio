import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@Component({
  selector: 'app-formular',
  standalone: true,
  imports: [CommonModule, FormsModule, DisclaimerComponent],
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit{
  formInvalid: boolean[] = [false, false, false, false] // Name, Email, Text, policy
  heading!:string;
  headingGer: string = "Du hast eine Projekt-Idee?";
  headingEng: string = "Want to discuss a new project?";
  subHeading!:string;
  subHeadingGer:string = "Lass sie uns verwirklichen!";
  subHeadingEng:string = "Say hello! Let's discuss your ideas and make it happen";
  formFieldNames!: string[];
  formFieldNamesGer: string[] = ["Ihr Name", "Ihre E-Mail Adresse", "Ihre Nachricht an mich","Ich habe die <a href='/imprint'>Datenschutzrichtlinien</a> gelesen und stimme mit ihnen zu", "Schreiben Sie eine Nachricht"];
  formFieldNamesEng: string[] = ["Your Name", "Your E-Mail", "Your Message", "I've red the <a href='/imprint'>privacy policy</a> and agree to he processing of my data as outlined.", "Please Enter Message"];
  btnText!: string;
  btnTextGer: string = "Absenden";
  btnTextEng: string = "Send it!";
  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    policy: false
  }

  ngOnInit(): void {
    this.setLang()
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
              console.info('send post complete')
              this.clearInputs()
              this.disclaimer.show()
            }
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  
        ngForm.resetForm();
      }
    }else{
      this.showInvalid(ngForm)
    }
  }
  showInvalid(ngForm: NgForm){
    this.formInvalid[0] = ngForm.controls['name'].invalid
    this.formInvalid[1] = ngForm.controls['email'].invalid
    this.formInvalid[2] = ngForm.controls['message'].invalid
    this.formInvalid[3] = ngForm.controls['policy'].invalid
  }
  clearInvalid(){
    for (let i = 0; i < this.formInvalid.length; i++) {
      this.formInvalid[i] = false;
    }
    
  }
  clearInputs() {
    this.clearInvalid()
    this.contactData = {
      name: "",
      email: "",
      message: "",
      policy: false
    }
  }
  onDisclaimerClosed(){}
  getLang(){
    return navigator.language;
  }
  setLang(){
    if (this.getLang() == 'de') {
      this.heading = this.headingGer;
      this.subHeading = this.subHeadingGer;
      this.formFieldNames = this.formFieldNamesGer;
      this.btnText = this.btnTextGer;
    }else{
      this.heading = this.headingEng;
      this.subHeading = this.subHeadingEng;
      this.formFieldNames = this.formFieldNamesEng
      this.btnText = this.btnTextEng
   
    }
  }
}

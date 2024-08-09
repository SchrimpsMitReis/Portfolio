import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss'
})
export class DisclaimerComponent implements OnInit, OnChanges {

  heading!: string;
  headingGer: string = 'Erfolgreich gesendet!'
  headingEng: string = 'Successfully send!'
  text!: string;
  textGer: string = 'Ihre Nachricht hat mich erreicht! Ich werde mich umgehend bei Ihnen melden!'
  textEng: string = 'I have received your message! I will get back to you promptly';
  btn!: string;
  btnGer: string = "Vielen Dank!";
  btnEng: string = "Thank You!";
  visible: boolean = false;
  
  @Output() closed = new EventEmitter<void>();
  
  ngOnInit(): void {
    this.setContent()

    console.log("Disclaimer is there");
    console.log(this)
  }
  ngOnChanges() {
  }
  getLang() {
    return navigator.language;
  }
  setContent() {
    if (this.getLang() === 'de') {
      this.heading = this.headingGer;
      this.text = this.textGer;
      this.btn = this.btnGer
    } else {
      this.heading = this.headingEng;
      this.text = this.textEng;
      this.btn = this.btnEng;
    }
  }
  show() {
    this.visible = true;
  }
  close() {
    this.visible = false;
    this.closed.emit()
  }
}

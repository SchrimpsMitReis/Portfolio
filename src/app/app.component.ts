import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { MainPageComponent } from './main-page/main-page.component';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MenuOverlayComponent,
    MainPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit() {
    AOS.init();
  }
  
}

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NgModule } from '@angular/core';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'menu', component: MenuOverlayComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent },
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',  
    scrollOffset: [0, 100], 
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
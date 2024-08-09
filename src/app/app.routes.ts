import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'menu', component: MenuOverlayComponent},
    {path: 'imprint', component: ImprintComponent},
    ];

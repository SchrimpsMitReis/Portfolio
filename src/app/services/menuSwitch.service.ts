import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MenuSwitch{


    private showMenu: boolean = false;


    burgerButton(){
        this.showMenu = !this.showMenu;
    }
    getSwitch(){
        return this.showMenu;
    }
}

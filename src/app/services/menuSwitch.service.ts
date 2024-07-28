import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MenuSwitch{


    private showMenu: boolean = false;


    burgerButton(){
        this.showMenu = !this.showMenu;
        console.log("Burger klicked", this.showMenu);
    }
    getSwitch(){
        return this.showMenu;
    }
}

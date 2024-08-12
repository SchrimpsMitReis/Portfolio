import { HostListener, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})


export class Mouse{
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent){
        console.log(`Mouse moved to position: X: ${event.clientX}, Y: ${event.clientY}`)
        
    }
}
import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class PostGuard implements CanActivate{
    
    constructor( private router: Router) { }

    canActivate() {
        if(localStorage.getItem('token')) {
            
            
            
        return true;
        } else {
            localStorage.removeItem('token')
          
     
            return false;
        }
    }

}
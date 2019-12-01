import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ValidateGuard implements CanActivate {

    constructor( private router: Router) { }

    canActivate() {
        if(localStorage.getItem('token')) {
            return true;
        } else {
    this.router.navigate(['app']);
            return;
        }
    }
}
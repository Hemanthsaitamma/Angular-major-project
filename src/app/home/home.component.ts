import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,private router:Router) { }

  ngOnInit() {
  }
  validate( username, password, event ) {
    event.preventDefault();
    var token = this.service.validateUser(username, password);
    
    if(typeof token !== 'undefined') {
      localStorage.setItem('token', token);
      
      this.router.navigate(['user']);
    }
    else{
      localStorage.removeItem('token');
    }
  }
}

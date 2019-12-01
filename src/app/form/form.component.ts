import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id;
  updateuser: Object;

  constructor(private route:ActivatedRoute, private r:Router, private serve:ApiService) { 
    this.route.params.subscribe(
      (res)=>{
        this.id=res.id;
        this.userdata();
      }
    )
  }
  userdata(){
    return this.serve.fetchuser(this.id).subscribe(
      (res)=>{
        this.updateuser=res;
      }
    )
  }

  ngOnInit() {
  }
  cancelHere(){
    this.r.navigate(['user'])
    
  }

}

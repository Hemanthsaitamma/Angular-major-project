import { Component, TemplateRef } from "@angular/core";
import { ApiService } from 'src/api.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector:'app-user',
    templateUrl:'user.component.html',
    styleUrls:['user.component.css']
})
export class  UserComponent{
    key;
    data:any;
    modalRef: BsModalRef;
    
    
    
    constructor(private serve:ApiService ,private route:Router,private modalService: BsModalService){
        this.getusers();
    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
   getusers(){
       var that=this;
        this.serve.fetchUsers().subscribe(function(res){
           that.data=res;
           that.serve.data1=res;
           
        //    console.log(res);
       })
   }
   clickHere(event){
       var self=this;
    self.key=event;  
    console.log(self.key);
    if(self.key) {
        self.data=self.serve.data1.filter(function(val,index){
            return val.id == self.key.id

        })
        debugger
    }
    else{
        self.data=self.serve.data1;
    }
       
   }
   userEditform(item){
       this.route.navigate(['form',item])
   }
   editClick(item){
       this.route.navigate(['card',item])
   }

   
}
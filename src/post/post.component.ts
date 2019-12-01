import { Component } from "@angular/core";
import { ApiService } from 'src/api.service';
import { PostService } from 'src/app/post/post.service';

@Component({
    selector:'app-post',
    templateUrl:'post.component.html',
    styleUrls:['post.component.css']
})
export class PostComponent{
    data:any;
    constructor(private serve:PostService){
        this.getusers();
    }
    getusers(){
        this.serve.fetchuserpost().subscribe(res =>{
            this.data=res;
        })
    }
    
 
 
   
}
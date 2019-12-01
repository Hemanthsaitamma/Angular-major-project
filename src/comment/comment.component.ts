import { Component } from "@angular/core";
import { CommentService } from 'src/app/comment/comment.service';

@Component({
    selector:'app-comment',
    templateUrl:'comment.component.html',
    styleUrls:['comment.component.css']
})
export class CommentComponent{
    data;
    
    
    
    currentPage = 1;
  page: number;
 
  pageChanged(event: any): void {
    this.page = event.page;
    if(this.page==1){
        this.serve.fetchUserInfo('_page=1&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==2){
        this.serve.fetchUserInfo('_page=2&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==3){
        this.serve.fetchUserInfo('_page=3&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==4){
        this.serve.fetchUserInfo('_page=4&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==5){
        this.serve.fetchUserInfo('_page=5&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==6){
        this.serve.fetchUserInfo('_page=6&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
    if(this.page==7){
        this.serve.fetchUserInfo('_page=7&_limit=10').subscribe(
            (res) =>{
                this.data=res
            }
        )
    }
   
  }
    constructor(private serve:CommentService){
        this.getUser();
    }
    getUser(){
        this.serve.fetchUsercomment(this.currentPage).subscribe(res =>{
            this.data=res;
            console.log(this.data);

        })
    }
    nextPage(){
    
    

    }
 

}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class CommentService{
    nextpage;
    constructor(private http:HttpClient){
        
    }
    fetchUsercomment(currentPage){
        
        return this.http.get("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10")
    }
    fetchUserInfo(info){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?"+info)


    }
}

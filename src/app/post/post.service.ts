import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root',
})
export class PostService{
    constructor(private http:HttpClient){

    }
    fetchuserpost(){
        return this.http.get("http://jsonplaceholder.typicode.com/posts");
      }
}
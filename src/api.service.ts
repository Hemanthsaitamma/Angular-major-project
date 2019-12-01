import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn:'root'
})
export class ApiService{
    
    data1;


    constructor(private http:HttpClient){    }
    fetchUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
    fetchuser(id:any){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
    }
    


    public users = [
        {
          username: 'test',
          password: 'test',
          token: 'testxyz123'
        },
        {
          username: 'admin',
          password: 'admin',
          token: 'adminxyz123'
        }
      ];

      validateUser(username, password) {
        var user;
        
        user = this.users.filter(user => {
          if(user.username === username && user.password === password) {
            return true;
          }
        });
        
        if(user.length >= 1) {
            return user[0].token;
        }
      }
    
    
}
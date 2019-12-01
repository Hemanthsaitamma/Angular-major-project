import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from 'src/comment/comment.component';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const comm=[
  {
    
    path:'',
   
    component:CommentComponent
  
}
  
 
]

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(comm),
    PaginationModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
})
export class CommentModule { }

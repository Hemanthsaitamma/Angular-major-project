import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from 'src/post/post.component';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';




const app=[
  {
    
      path:'',
      
      component:PostComponent
    
  }
]

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    AccordionModule,
    
    
    RouterModule.forChild(app)
  ]
})
export class PostModule { }

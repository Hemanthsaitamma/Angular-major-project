import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import {  HeaderComponent } from 'src/header/header.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { UserComponent } from 'src/user/user.component';
import { CommentComponent } from 'src/comment/comment.component';
import { PostComponent } from 'src/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GuardService }   from '../app/guard.service'

import { CardComponent } from './card/card.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';




const routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren:"./user/user.module#UserModule",
    canActivate:[GuardService]
  },
  {
    path:'post',
    loadChildren:"./post/post.module#PostModule",
    canActivate:[GuardService]
  },
  {
    path:'comment',
    loadChildren:"./comment/comment.module#CommentModule",
    canActivate:[GuardService]
  },
  {
    path:'form/:id',
    component:FormComponent
  },
  {
    path:'card/:id',
    component:CardComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FormComponent,
    HomeComponent,
    CardComponent
   
    
   
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{}),
    HttpClientModule,
    NgSelectModule, 
    FormsModule, 
    TooltipModule.forRoot(), 
    ModalModule.forRoot(), 
    PopoverModule.forRoot(), AccordionModule.forRoot(), BrowserAnimationsModule, PaginationModule.forRoot(), 
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/user/user.component';
import { Router,RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PopoverModule } from 'ngx-bootstrap/popover';




const route=[
  {
    path:'',
    component:UserComponent
  }
 
]

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    TooltipModule,
    ModalModule,
    PopoverModule,
    RouterModule.forChild(route),
    NgSelectModule, FormsModule
  ]
})
export class UserModule { }

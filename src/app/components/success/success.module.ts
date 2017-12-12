import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SuccessComponent],
  exports:[SuccessComponent]
})
export class SuccessModule { }

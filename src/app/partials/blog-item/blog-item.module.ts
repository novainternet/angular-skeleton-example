import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from './blog-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogItemComponent],
  exports: [BlogItemComponent]
})
export class BlogItemModule { }

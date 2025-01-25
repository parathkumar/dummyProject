import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsHeaderComponent } from './posts-header/posts-header.component';
import { PostComponent } from './posts-list/post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostsHeaderComponent,
    PostsListComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostsComponent
  ]
})
export class PostsModule { }

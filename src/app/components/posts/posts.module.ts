import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsHeaderComponent } from './components/posts-header/posts-header.component';
import { PostComponent } from './components/posts-list/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';



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

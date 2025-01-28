import { Component } from '@angular/core';
import { Dummy } from '../../../../shared/constants/constant.enum';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent {
  dummy = Dummy.hello;
}

import { Component } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: Post[] = [];
  constructor(private postService: PostService){}

  ngOnInit():void{
    this.loadPosts();
  }
  loadPosts():void{
    this.posts = this.postService.getPosts();
  }
}
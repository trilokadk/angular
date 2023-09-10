import { Injectable } from '@angular/core';
import { Post } from 'src/app/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private posts: Post[] = [
{
  id:1,
  title : 'Angular v16 has been released' ,
  content:'Angular v16 has been released. You can now use the new Angul'
},

];
  
  
  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }
  getPost(postId: number) {
    const post = this.posts.find(post => post.id === postId);
    return post;
  }
  addPost(post : Post):void{
    post.id = Date.now();
    this.posts.push(post);
  }
  editPost(post: Post):void{
    const index = this.posts.findIndex(p => p.id = post.id);
    this.posts[index] = post;
  }
  deletePost(postId: number){
    this.posts =this.posts.filter(post => post.id === postId);
  }


}
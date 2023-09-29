import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
  users: any;
  posts: any;
  post: any = {
    id: null,
    title: "",
    body: "",
    userId: null
  };

  compareWith: any;

  constructor(private api: ApiService) { }

  compareWithFn = (o1: any, o2: any) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  guardarPost() {
    this.post.userId = this.user
    this.api.postPosts(this.post);
    this.obtenerPosts();
  };

  eliminarPost(post:any) {
    this.api.deletePost(post.id);
  };

  obtenerUsuarios(){
    this.api.getUsers().subscribe((data)=>{
      this.users = data;
    })
  }

  setPost(){

  }

  obtenerPosts(){
    this.api.getPosts().subscribe((res)=>{
      this.posts = res;
    })
  }

  ionViewWillEnter(){
    this.obtenerUsuarios();
    this.obtenerPosts();
  }

}

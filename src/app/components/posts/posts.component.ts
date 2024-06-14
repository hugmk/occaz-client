import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] | undefined;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.http.get<Post[]>("http://localhost:3000/posts/getAllPosts").subscribe(
      (res) => {
        this.posts = res;
      }
    )
  }

  goToPost(id:String) {
    let path = "/annonce/" + id;
    this.router.navigateByUrl(path);
  }
}

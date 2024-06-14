import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  id: string | null = "";
  annonce: Post | undefined;
  imageUrl = "";
  showNum = false;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(!this.id) {
      this.router.navigateByUrl('/annonces');
    }
    else {
      this.http.get<Post>("http://localhost:3000/posts/getPost/" + this.id).subscribe(
        (res) => {
          console.log("réponse du back end :");
          console.log(res);
          this.annonce = res;
          this.imageUrl = "http://localhost:3000/images/" + res.image;
        }
      )
    }
  }
}

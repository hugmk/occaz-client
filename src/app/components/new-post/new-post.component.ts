import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  annonce: Post = {
    title: '',
    author: '',
    content: '',
    price: 0,
    phoneNumber: '',
    email: '',
    image: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    // Logique pour soumettre le formulaire
    console.log(this.annonce);
    this.http.post<Post>('http://localhost:3000/posts/addPost', this.annonce)
    .subscribe(
      response => {
        // Traitez la réponse de votre backend
        console.log('Réponse du backend :', response);
        // Réinitialiser le formulaire après soumission
        let routeToPost = '/annonce/' + response._id;
        this.router.navigateByUrl(routeToPost);
      },
      error => {
        // Traitez les erreurs
        console.error('Erreur lors de l\'envoi de la requête :', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const file: File = event.dataTransfer!.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.annonce.image = reader.result as string;
      console.log(this.annonce.image);
    };
    reader.readAsDataURL(file);
  }

  isFormValid(): boolean {
    if(this.annonce.title 
      && this.annonce.content 
      && this.annonce.email 
      && this.annonce.image 
      && this.annonce.author
      && this.annonce.phoneNumber) {
      return true;
    }
    return false;
  }
}

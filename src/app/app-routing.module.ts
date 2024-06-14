import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: 'annonces', component: PostsComponent },
  { path: 'nouvelle-annonce', component: NewPostComponent },
  { path: 'annonce/:id', component: PostComponent },
  { path: '**', redirectTo: 'annonces' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

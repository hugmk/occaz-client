import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title = '';

  constructor(private router: Router){
    
  }

  addPost() {
    this.router.navigateByUrl('/nouvelle-annonce');
  }

  allPosts() {
    this.router.navigateByUrl('/annonces');
  }
}

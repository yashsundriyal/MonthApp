import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
    currentImage = './assets/wallpaper.jpg';
    constructor(private router: Router) {} 
  phoneCall(){
 this.currentImage = './assets/another-image.jpg'; 
  }
  back(){
    this.currentImage = './assets/wallpaper.jpg';
  }
  openGallery(){
     this.router.navigate(['/carousel']);
  }
}

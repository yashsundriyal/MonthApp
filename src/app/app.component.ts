import { Component } from '@angular/core';
// import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  template:  `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = "month-app"
}

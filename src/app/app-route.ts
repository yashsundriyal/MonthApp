import { Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
export const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'carousel', component: CarouselComponent },
];
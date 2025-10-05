import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  styleUrls: ['./carousel.component.scss'],
  imports : [CommonModule] 
})
export class CarouselComponent {
  title = 'month-app';
months = [
  { name: 'July', images: ['/assets/1stest.png'] },
  { name: 'August', images: ['/assets/2ndest.png'] },
  { name: 'September', images: ['/assets/3rdest.png'] },
];

  activeIndex = 0;

  setActive(i: number) {
    this.activeIndex = i;
    const container = document.querySelector('.carousel') as HTMLElement;
    const slideWidth = container.clientWidth;
    container.scrollTo({ left: i * slideWidth, behavior: 'smooth' });
  }

  onScroll(event: Event) {
    const el = event.target as HTMLElement;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    this.activeIndex = i;
  }
}
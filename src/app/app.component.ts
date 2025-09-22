import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'month-app';
months = [
  { name: 'June', images: ['/assets/1stest.png'] },
  { name: 'July', images: ['/assets/2ndest.png'] },
  { name: 'August', images: ['/assets/3rdest.png'] },
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
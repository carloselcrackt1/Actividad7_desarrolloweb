import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from '../carousel/carousel';
import { Navbar } from '../navbar/navbar';
import { BallImages } from '../ball-images/ball-images';
import { FooterComponent } from '../footer-component/footer-component';
@Component({
  selector: 'app-root',
  imports: [Carousel,Navbar,BallImages,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carousel-app');
}

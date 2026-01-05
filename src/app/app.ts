import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { GamingActivitiesComponent } from './components/gaming-activities/gaming-activities';
import { CareTipsComponent } from './components/care-tips/care-tips';
import { GalleryComponent } from './components/gallery/gallery';
import { AboutComponent } from './components/about/about';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    GamingActivitiesComponent,
    CareTipsComponent,
    GalleryComponent,
    AboutComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Kids Care - Gaming & Wellness';
}

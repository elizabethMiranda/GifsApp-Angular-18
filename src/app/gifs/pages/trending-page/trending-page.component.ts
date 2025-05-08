import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [
    RouterOutlet,
    GifListComponent
],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export default class TrendingPageComponent {

}

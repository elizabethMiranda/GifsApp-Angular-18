import { Component } from '@angular/core';
import { enviroment } from '@environments/environment';
//import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'gifs-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrl: './gifs-side-menu-header.component.css'
})
export class GifsSideMenuHeaderComponent {
      envs = enviroment;
}

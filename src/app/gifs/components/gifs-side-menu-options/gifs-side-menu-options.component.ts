import { Component } from '@angular/core';


interface MenuOption{
  icon: string;
  label: string;
  route:string;
  subLabel: string;
}
@Component({
  selector: 'gifs-side-menu-options',
  standalone: true,
  imports: [],
  templateUrl: './gifs-side-menu-options.component.html',
  styleUrl: './gifs-side-menu-options.component.css'
})
export class GifsSideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
  {
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    route: '/dashboard/trending',
    subLabel: 'Gifs Populares',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Buscador',
    route: '/dashboard/search',
    subLabel: 'Buscar gifs',
  }

];
}

import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      path: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      path: './template/dinamicos'
    },
    {
      texto: 'Switches',
      path: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      path: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      path: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      path: './reactive/switches'
    },
  ];


}

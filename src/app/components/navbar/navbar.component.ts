import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  primeraGestion:boolean = false;
  segundaGestion:boolean = false;
  terceraGestion:boolean = false;

  constructor(){}
}

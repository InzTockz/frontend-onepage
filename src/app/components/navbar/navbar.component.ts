import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { LucideFileText, LucideHouse, LucideDot, LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, LucideFileText, LucideHouse, LucideDot, LucideUser, RouterLinkWithHref],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  primeraGestion:boolean = false;
  segundaGestion:boolean = false;
  terceraGestion:boolean = false;

  constructor(){}
}

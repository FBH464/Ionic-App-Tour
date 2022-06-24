import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab1Page } from '../index.pages';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  Inicio:any = Tab1Page;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToInicio() {
    this.router.navigate(['/tabs'])

   }

}

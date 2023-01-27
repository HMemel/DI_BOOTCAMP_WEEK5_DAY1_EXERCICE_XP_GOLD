import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  imagePath: string = "https://www.challenges.fr/assets/img/2021/04/15/images_list-r4x3w1000-6077eed7a8a35-2020-08-04-image-21c0123-001-resultat-jpg.jpg"

  constructor(){}

  ngOnInit() {

  }


}

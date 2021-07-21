import { Component, OnInit } from '@angular/core';
//import { from, Observable } from 'rxjs';

import { IntroService } from '../../services';

import { Banner } from '../../models';
@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.sass']
})
export class HomeIntroComponent implements OnInit {

  public banners: Banner[];

  constructor(private service: IntroService) {
    this.banners = [];
  }

  ngOnInit(): void {

    // this.service.all().subscribe(
    //   response => this.banners = response,
    //   errorResponse => errorResponse
    // );
    this.banners = <Banner[]> this.service.all();
    console.log(this.banners);
  }

}

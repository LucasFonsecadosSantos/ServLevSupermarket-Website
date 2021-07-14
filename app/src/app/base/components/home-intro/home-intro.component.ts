import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

import { IntroService } from '../../services';
@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.sass']
})
export class HomeIntroComponent implements OnInit {

  private banners: Banner[];

  constructor(private service: IntroService) { }

  ngOnInit(): void {

    this.service.all().subscribe(
      response => this.banners = response,
      errorResponse => errorResponse
    );

  }

}

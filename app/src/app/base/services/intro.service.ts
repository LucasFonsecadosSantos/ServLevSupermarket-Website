import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banner } from './../models';

import banners from '../../../assets/data/banners.json';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor() { }

  public all(): {} {

    //return this.http.get<Banner[]>(route);

    return banners;

  }

}

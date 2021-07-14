import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banner } from './../models';

import banners from '../../../assets/data/banners.json';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  constructor(private http: HttpClient) { }

  public all(): Banner[] {

    //return this.http.get<Banner[]>(route);

    return banners;

  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  HeaderComponent,
  FooterComponent,
  OfferListationComponent,
  ContactComponent,
  HomeIntroComponent, 
  LocationComponent,
  NavComponent
} from './components';
import {
  HomeComponent
} from './pages';
import {
  InformationService,
  NavigatorService,
  IntroService,
  OfferService
} from './services';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OfferListationComponent,
    ContactComponent,
    HomeIntroComponent,
    LocationComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    InformationService,
    NavigatorService,
    OfferService,
    IntroService
  ]
})
export class BaseModule { }

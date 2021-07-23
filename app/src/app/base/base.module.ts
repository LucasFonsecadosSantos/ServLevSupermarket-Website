import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
import { CustomContainerDirective } from './directivies';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OfferListationComponent,
    ContactComponent,
    HomeIntroComponent,
    LocationComponent,
    NavComponent,
    CustomContainerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HttpClient,
    InformationService,
    NavigatorService,
    OfferService,
    IntroService
  ]
})
export class BaseModule { }

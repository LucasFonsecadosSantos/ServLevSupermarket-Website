import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  HeaderComponent,
  FooterComponent 
} from './components';
import {
  HomeComponent
} from './pages';
import { OfferListationComponent } from './components/offer-listation/offer-listation.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OfferListationComponent,
    ContactComponent,
    HomeIntroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BaseModule { }

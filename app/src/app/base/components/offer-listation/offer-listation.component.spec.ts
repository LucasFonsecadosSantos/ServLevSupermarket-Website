import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListationComponent } from './offer-listation.component';

describe('OfferListationComponent', () => {
  let component: OfferListationComponent;
  let fixture: ComponentFixture<OfferListationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferListationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferListationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

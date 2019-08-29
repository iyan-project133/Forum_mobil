import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiturePromoComponent } from './fiture-promo.component';

describe('FiturePromoComponent', () => {
  let component: FiturePromoComponent;
  let fixture: ComponentFixture<FiturePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiturePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiturePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

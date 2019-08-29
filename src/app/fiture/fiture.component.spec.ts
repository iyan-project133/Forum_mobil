import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitureComponent } from './fiture.component';

describe('FitureComponent', () => {
  let component: FitureComponent;
  let fixture: ComponentFixture<FitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitureCariComponent } from './fiture-cari.component';

describe('FitureCariComponent', () => {
  let component: FitureCariComponent;
  let fixture: ComponentFixture<FitureCariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitureCariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitureCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

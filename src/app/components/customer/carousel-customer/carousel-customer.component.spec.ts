import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCustomerComponent } from './carousel-customer.component';

describe('CarouselCustomerComponent', () => {
  let component: CarouselCustomerComponent;
  let fixture: ComponentFixture<CarouselCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

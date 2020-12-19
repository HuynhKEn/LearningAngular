import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComponentComponent } from './find-component.component';

describe('FindComponentComponent', () => {
  let component: FindComponentComponent;
  let fixture: ComponentFixture<FindComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListItemMobileComponent } from './menu-list-item-mobile.component';

describe('MenuListItemMobileComponent', () => {
  let component: MenuListItemMobileComponent;
  let fixture: ComponentFixture<MenuListItemMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListItemMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerCustomerComponent } from './pdf-viewer-customer.component';

describe('PdfViewerCustomerComponent', () => {
  let component: PdfViewerCustomerComponent;
  let fixture: ComponentFixture<PdfViewerCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewerCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

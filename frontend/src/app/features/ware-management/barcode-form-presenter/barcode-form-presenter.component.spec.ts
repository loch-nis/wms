import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeFormPresenterComponent } from './barcode-form-presenter.component';

describe('BarcodeFormComponent', () => {
  let component: BarcodeFormPresenterComponent;
  let fixture: ComponentFixture<BarcodeFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarcodeFormPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

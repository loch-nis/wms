import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareDeleteButtonPresenterComponent } from './ware-delete-button-presenter.component';

describe('WareDeleteButtonComponent', () => {
  let component: WareDeleteButtonPresenterComponent;
  let fixture: ComponentFixture<WareDeleteButtonPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareDeleteButtonPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareDeleteButtonPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

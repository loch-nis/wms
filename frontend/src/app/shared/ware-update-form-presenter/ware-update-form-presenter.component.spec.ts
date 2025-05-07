import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareUpdateFormPresenterComponent } from './ware-update-form-presenter.component';

describe('UpdateWareFormComponent', () => {
  let component: WareUpdateFormPresenterComponent;
  let fixture: ComponentFixture<WareUpdateFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareUpdateFormPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareUpdateFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

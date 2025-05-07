import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareFormPresenterComponent } from './ware-form-presenter.component';

describe('CreateWareFormComponent', () => {
  let component: WareFormPresenterComponent;
  let fixture: ComponentFixture<WareFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareFormPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

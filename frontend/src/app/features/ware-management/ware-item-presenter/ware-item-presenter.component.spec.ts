import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareItemPresenterComponent } from './ware-item-presenter.component';

describe('WareComponent', () => {
  let component: WareItemPresenterComponent;
  let fixture: ComponentFixture<WareItemPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareItemPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareItemPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

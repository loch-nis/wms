import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareListPresenterComponent } from './ware-list-presenter.component';

describe('WareListComponent', () => {
  let component: WareListPresenterComponent;
  let fixture: ComponentFixture<WareListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareListPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

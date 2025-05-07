import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareLookupPresenterComponent } from './ware-lookup-presenter.component';

describe('WareLookupComponent', () => {
  let component: WareLookupPresenterComponent;
  let fixture: ComponentFixture<WareLookupPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareLookupPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareLookupPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

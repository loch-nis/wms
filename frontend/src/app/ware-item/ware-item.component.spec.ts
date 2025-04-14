import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareItemComponent } from './ware-item.component';

describe('WareComponent', () => {
  let component: WareItemComponent;
  let fixture: ComponentFixture<WareItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

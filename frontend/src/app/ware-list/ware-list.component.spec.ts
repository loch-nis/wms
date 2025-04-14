import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareListComponent } from './ware-list.component';

describe('WareListComponent', () => {
  let component: WareListComponent;
  let fixture: ComponentFixture<WareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareManagementContainerComponent } from './ware-management-container.component';

describe('DashboardComponent', () => {
  let component: WareManagementContainerComponent;
  let fixture: ComponentFixture<WareManagementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WareManagementContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WareManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

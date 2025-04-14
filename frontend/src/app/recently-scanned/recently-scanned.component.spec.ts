import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyScannedComponent } from './recently-scanned.component';

describe('RecentlyScannedComponent', () => {
  let component: RecentlyScannedComponent;
  let fixture: ComponentFixture<RecentlyScannedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyScannedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyScannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

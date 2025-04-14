import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWareFormComponent } from './update-ware-form.component';

describe('UpdateWareFormComponent', () => {
  let component: UpdateWareFormComponent;
  let fixture: ComponentFixture<UpdateWareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateWareFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateWareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

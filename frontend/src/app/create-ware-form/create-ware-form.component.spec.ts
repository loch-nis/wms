import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWareFormComponent } from './create-ware-form.component';

describe('CreateWareFormComponent', () => {
  let component: CreateWareFormComponent;
  let fixture: ComponentFixture<CreateWareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWareFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSuccesComponent } from './step-succes.component';

describe('StepSuccesComponent', () => {
  let component: StepSuccesComponent;
  let fixture: ComponentFixture<StepSuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepSuccesComponent]
    });
    fixture = TestBed.createComponent(StepSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

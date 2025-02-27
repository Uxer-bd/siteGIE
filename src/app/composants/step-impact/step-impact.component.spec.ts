import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepImpactComponent } from './step-impact.component';

describe('StepImpactComponent', () => {
  let component: StepImpactComponent;
  let fixture: ComponentFixture<StepImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepImpactComponent]
    });
    fixture = TestBed.createComponent(StepImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

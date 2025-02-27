import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPublicationComponent } from './step-publication.component';

describe('StepPublicationComponent', () => {
  let component: StepPublicationComponent;
  let fixture: ComponentFixture<StepPublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepPublicationComponent]
    });
    fixture = TestBed.createComponent(StepPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

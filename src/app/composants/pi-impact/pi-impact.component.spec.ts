import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiImpactComponent } from './pi-impact.component';

describe('PiImpactComponent', () => {
  let component: PiImpactComponent;
  let fixture: ComponentFixture<PiImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiImpactComponent]
    });
    fixture = TestBed.createComponent(PiImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

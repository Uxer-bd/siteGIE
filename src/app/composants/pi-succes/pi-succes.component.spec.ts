import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiSuccesComponent } from './pi-succes.component';

describe('PiSuccesComponent', () => {
  let component: PiSuccesComponent;
  let fixture: ComponentFixture<PiSuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiSuccesComponent]
    });
    fixture = TestBed.createComponent(PiSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

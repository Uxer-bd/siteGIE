import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiComponent } from './pi.component';

describe('PiComponent', () => {
  let component: PiComponent;
  let fixture: ComponentFixture<PiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiComponent]
    });
    fixture = TestBed.createComponent(PiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

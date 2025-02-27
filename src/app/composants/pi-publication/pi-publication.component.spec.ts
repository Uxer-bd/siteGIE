import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiPublicationComponent } from './pi-publication.component';

describe('PiPublicationComponent', () => {
  let component: PiPublicationComponent;
  let fixture: ComponentFixture<PiPublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiPublicationComponent]
    });
    fixture = TestBed.createComponent(PiPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrationComponent } from './modal-registration.component';

describe('ModalRegistrationComponent', () => {
  let component: ModalRegistrationComponent;
  let fixture: ComponentFixture<ModalRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

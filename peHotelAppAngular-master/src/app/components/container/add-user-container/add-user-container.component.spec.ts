import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserContainerComponent } from './add-user-container.component';

describe('AddUserContainerComponent', () => {
  let component: AddUserContainerComponent;
  let fixture: ComponentFixture<AddUserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

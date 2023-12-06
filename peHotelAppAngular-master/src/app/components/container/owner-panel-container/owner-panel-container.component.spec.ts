import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPanelContainerComponent } from './owner-panel-container.component';

describe('OwnerPanelContainerComponent', () => {
  let component: OwnerPanelContainerComponent;
  let fixture: ComponentFixture<OwnerPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerPanelContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

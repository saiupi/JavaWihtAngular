import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentEmployeeLinkComponent } from './assignment-employee-link.component';

describe('AssignmentEmployeeLinkComponent', () => {
  let component: AssignmentEmployeeLinkComponent;
  let fixture: ComponentFixture<AssignmentEmployeeLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentEmployeeLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentEmployeeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

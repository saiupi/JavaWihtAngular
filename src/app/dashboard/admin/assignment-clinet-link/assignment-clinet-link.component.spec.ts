import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentClinetLinkComponent } from './assignment-clinet-link.component';

describe('AssignmentClinetLinkComponent', () => {
  let component: AssignmentClinetLinkComponent;
  let fixture: ComponentFixture<AssignmentClinetLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentClinetLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentClinetLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

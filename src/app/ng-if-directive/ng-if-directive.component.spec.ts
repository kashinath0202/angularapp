import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfDirectiveComponent } from './ng-if-directive.component';

describe('NgIfDirectiveComponent', () => {
  let component: NgIfDirectiveComponent;
  let fixture: ComponentFixture<NgIfDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

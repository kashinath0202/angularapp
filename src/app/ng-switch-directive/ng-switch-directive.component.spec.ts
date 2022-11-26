import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirectiveComponent } from './ng-switch-directive.component';

describe('NgSwitchDirectiveComponent', () => {
  let component: NgSwitchDirectiveComponent;
  let fixture: ComponentFixture<NgSwitchDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

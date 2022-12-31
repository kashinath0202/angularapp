import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardThreeComponent } from './route-guard-three.component';

describe('RouteGuardThreeComponent', () => {
  let component: RouteGuardThreeComponent;
  let fixture: ComponentFixture<RouteGuardThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

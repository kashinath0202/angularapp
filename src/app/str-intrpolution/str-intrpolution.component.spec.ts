import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrIntrpolutionComponent } from './str-intrpolution.component';

describe('StrIntrpolutionComponent', () => {
  let component: StrIntrpolutionComponent;
  let fixture: ComponentFixture<StrIntrpolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrIntrpolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrIntrpolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

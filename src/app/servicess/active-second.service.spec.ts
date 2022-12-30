import { TestBed } from '@angular/core/testing';

import { ActiveSecondService } from './active-second.service';

describe('ActiveSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveSecondService = TestBed.get(ActiveSecondService);
    expect(service).toBeTruthy();
  });
});

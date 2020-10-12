import { TestBed } from '@angular/core/testing';

import { HttpServieService } from './http-servie.service';

describe('HttpServieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpServieService = TestBed.get(HttpServieService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpSupportService } from './http-support.service';

describe('HttpSupportService', () => {
  let service: HttpSupportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSupportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

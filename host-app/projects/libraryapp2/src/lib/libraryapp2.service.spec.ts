import { TestBed } from '@angular/core/testing';

import { Libraryapp2Service } from './libraryapp2.service';

describe('Libraryapp2Service', () => {
  let service: Libraryapp2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libraryapp2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

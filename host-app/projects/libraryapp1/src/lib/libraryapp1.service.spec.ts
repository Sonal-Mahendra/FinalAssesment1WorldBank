import { TestBed } from '@angular/core/testing';

import { Libraryapp1Service } from './libraryapp1.service';

describe('Libraryapp1Service', () => {
  let service: Libraryapp1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libraryapp1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

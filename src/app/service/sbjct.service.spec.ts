import { TestBed } from '@angular/core/testing';

import { SbjctService } from './sbjct.service';

describe('SbjctService', () => {
  let service: SbjctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbjctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

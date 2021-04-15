import { TestBed } from '@angular/core/testing';

import { CongressListService } from './congress-list.service';

describe('CongressListService', () => {
  let service: CongressListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongressListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

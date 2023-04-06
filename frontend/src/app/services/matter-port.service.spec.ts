import { TestBed } from '@angular/core/testing';

import { MatterPortService } from './matter-port.service';

describe('MatterPortService', () => {
  let service: MatterPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatterPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

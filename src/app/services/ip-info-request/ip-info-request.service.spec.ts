import { TestBed } from '@angular/core/testing';

import { IpInfoRequestService } from './ip-info-request.service';

describe('IpInfoRequestService', () => {
  let service: IpInfoRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpInfoRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

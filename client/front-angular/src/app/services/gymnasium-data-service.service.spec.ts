import { TestBed } from '@angular/core/testing';

import { GymnasiumDataServiceService } from './gymnasium-data-service.service';

describe('GymnasiumDataServiceService', () => {
  let service: GymnasiumDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymnasiumDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

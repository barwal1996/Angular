import { TestBed } from '@angular/core/testing';

import { CustomerRegistationService } from './customer-registration-service.service';

describe('CustomerRegistrationService', () => {
  let service: CustomerRegistationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRegistationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

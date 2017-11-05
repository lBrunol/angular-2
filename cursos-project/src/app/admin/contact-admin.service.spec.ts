import { TestBed, inject } from '@angular/core/testing';

import { ContactAdminService } from './contact-admin.service';

describe('ContactAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactAdminService]
    });
  });

  it('should be created', inject([ContactAdminService], (service: ContactAdminService) => {
    expect(service).toBeTruthy();
  }));
});

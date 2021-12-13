import { TestBed } from '@angular/core/testing';

import { MyNavbarService } from './my-navbar.service';

describe('MyNavbarService', () => {
  let service: MyNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

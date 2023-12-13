import { TestBed } from '@angular/core/testing';

import { ResolverProductsService } from './resolver-products.service';

describe('ResolverProductsService', () => {
  let service: ResolverProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolverProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

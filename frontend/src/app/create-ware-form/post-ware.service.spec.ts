import { TestBed } from '@angular/core/testing';

import { PostWareService } from './post-ware.service';

describe('PostWareService', () => {
  let service: PostWareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostWareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

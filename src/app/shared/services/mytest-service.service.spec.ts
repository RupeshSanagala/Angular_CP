import { TestBed } from '@angular/core/testing';

import { MytestServiceService } from './mytest-service.service';

describe('MytestServiceService', () => {
  let service: MytestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytestServiceService);
  });
   
  it("check mul func",()=>{
    let serObj= new MytestServiceService();
  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

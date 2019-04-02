import { TestBed } from '@angular/core/testing';

import { RollService } from './roll.service';

describe('RollService', () => {

  let service: RollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a random number 1-6', () => {
    spyOn(Math, 'random').and.returnValues(.55, .65, .75, .85);
    service.roll().subscribe(num => {
      expect(num).toBe(4);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(4);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(5);
    });
    service.roll().subscribe(num => {
      expect(num).toBe(6);
    });
  });
});

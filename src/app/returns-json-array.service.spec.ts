import { TestBed, async, inject } from '@angular/core/testing';
import { ReturnsJsonArrayService } from './returns-json-array.service';
import { ReturnsCountryService } from './returns-json-array.service';

describe('Service: ReturnsJsonArray', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnsJsonArrayService]
    });
  });

  it('should ...', inject([ReturnsCountryService], (service: ReturnsCountryService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Service: ReturnsCountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnsCountryService]
    });
  });

  it('should ...', inject([ReturnsCountryService], (service: ReturnsCountryService) => {
    expect(service).toBeTruthy();
  }));
});
import { TestBed } from '@angular/core/testing';

import { SpecialistSelectionService } from './specialist-selection.service';

describe('SpecialistSelectionService', () => {
  let service: SpecialistSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialistSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

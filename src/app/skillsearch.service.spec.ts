import { TestBed } from '@angular/core/testing';

import { SkillsearchService } from './skillsearch.service';

describe('SkillsearchService', () => {
  let service: SkillsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

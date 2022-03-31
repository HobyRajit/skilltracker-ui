import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltrackersearchComponent } from './skilltrackersearch.component';

describe('SkilltrackersearchComponent', () => {
  let component: SkilltrackersearchComponent;
  let fixture: ComponentFixture<SkilltrackersearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilltrackersearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltrackersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

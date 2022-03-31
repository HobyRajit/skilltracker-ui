import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilltrackerlistComponent } from './skilltrackerlist.component';

describe('SkilltrackerlistComponent', () => {
  let component: SkilltrackerlistComponent;
  let fixture: ComponentFixture<SkilltrackerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilltrackerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilltrackerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

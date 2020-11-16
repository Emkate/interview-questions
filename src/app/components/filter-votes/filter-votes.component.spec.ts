import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVotesComponent } from './filter-votes.component';

describe('FilterVotesComponent', () => {
  let component: FilterVotesComponent;
  let fixture: ComponentFixture<FilterVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

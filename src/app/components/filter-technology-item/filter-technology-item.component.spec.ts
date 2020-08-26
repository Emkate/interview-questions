import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTechnologyItemComponent } from './filter-technology-item.component';

describe('FilterTechnologyItemComponent', () => {
  let component: FilterTechnologyItemComponent;
  let fixture: ComponentFixture<FilterTechnologyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTechnologyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTechnologyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

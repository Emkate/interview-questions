import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdvancementComponent } from './filter-advancement.component';

describe('FilterAdvancementComponent', () => {
  let component: FilterAdvancementComponent;
  let fixture: ComponentFixture<FilterAdvancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAdvancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

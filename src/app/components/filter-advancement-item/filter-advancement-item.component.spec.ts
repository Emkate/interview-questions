import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdvancementItemComponent } from './filter-advancement-item.component';

describe('FilterAdvancementItemComponent', () => {
  let component: FilterAdvancementItemComponent;
  let fixture: ComponentFixture<FilterAdvancementItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAdvancementItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAdvancementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

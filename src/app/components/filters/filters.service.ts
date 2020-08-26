import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from './filter.interface';

@Injectable({ providedIn: 'root' })
export class FiltersService {
  public currentFilters$: BehaviorSubject<Filter> = new BehaviorSubject({ 1: [], 2: []});

  addFilter(filterId: number, filterValue: string): void {
    const currentVal = this.currentFilters$.getValue();
    currentVal[filterId].push(filterValue);

    this.currentFilters$.next({ ...currentVal });
  }

  removeFilter(filterId: number, filterValue: string): void {
    const currentVal = this.currentFilters$.getValue();
    currentVal[filterId] = currentVal[filterId].filter(el => el !== filterValue);

    this.currentFilters$.next(currentVal);
  }
}

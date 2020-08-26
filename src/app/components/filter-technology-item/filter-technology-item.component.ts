import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from '../filters/filters.service';

@Component({
  selector: 'app-filter-technology-item',
  templateUrl: './filter-technology-item.component.html',
  styleUrls: ['./filter-technology-item.component.scss']
})
export class FilterTechnologyItemComponent implements OnInit {
  @Input() name: string;
  public selected = false;

  constructor(
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = !this.selected;

    this.selected ? this.setFilterOn() : this.setFilterOff();
  }

  setFilterOn(): void {
    this.filtersService.addFilter(1, this.name);
  }

  setFilterOff(): void {
    this.filtersService.removeFilter(1, this.name);
  }
}

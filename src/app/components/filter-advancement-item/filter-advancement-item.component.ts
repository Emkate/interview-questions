import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from '../filters/filters.service';

@Component({
  selector: 'app-filter-advancement-item',
  templateUrl: './filter-advancement-item.component.html',
  styleUrls: ['./filter-advancement-item.component.scss']
})
export class FilterAdvancementItemComponent implements OnInit {
  @Input() type: string;
  selection = false;

  constructor(
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selection = !this.selection;

    this.selection ? this.setFilterOn() : this.setFilterOff();
  }

  setFilterOn(): void {
    this.filtersService.addFilter(2, this.type);
  }

  setFilterOff(): void {
    this.filtersService.removeFilter(2, this.type);
  }
}

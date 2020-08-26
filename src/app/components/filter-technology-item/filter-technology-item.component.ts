import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-technology-item',
  templateUrl: './filter-technology-item.component.html',
  styleUrls: ['./filter-technology-item.component.scss']
})
export class FilterTechnologyItemComponent implements OnInit {
  @Input() name: string;
  public selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = !this.selected;
  }
}

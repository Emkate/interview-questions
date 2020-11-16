import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-votes',
  templateUrl: './filter-votes.component.html',
  styleUrls: ['./filter-votes.component.scss']
})
export class FilterVotesComponent implements OnInit {
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

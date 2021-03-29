import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { QuestionsQuery } from 'src/app/state/questions/questions.query';

@Component({
  selector: 'app-filter-votes',
  templateUrl: './filter-votes.component.html',
  styleUrls: ['./filter-votes.component.scss']
})
export class FilterVotesComponent implements OnInit {
  number = 0;
  maximumVotes = 0;

  constructor(
    private questionQuery: QuestionsQuery
  ) {
  }

  ngOnInit(): void {
    this.getMaximumVotesNumber();
  }

  getMaximumVotesNumber(): void {
    this.questionQuery.selectMaximumVotesNumber().pipe(
      tap(votes => this.maximumVotes = votes)
    ).subscribe();
  }
}

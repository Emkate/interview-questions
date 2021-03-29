import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuestionsStore, QuestionsState } from './questions.store';
import { Filter, QuestionLevel, QuestionType } from 'src/app/components/filters/filter.interface';
import { Question } from './question.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionsQuery extends QueryEntity<QuestionsState> {

  constructor(protected store: QuestionsStore) {
    super(store);
  }

  selectFiltered(filters: Filter): Observable<Question[]> {
    console.log(filters);
    return this.selectAll({
      filterBy: [
        ({ type }) => filters['1'].length ? filters['1'].includes(type as QuestionType) : true,
        ({ level }) => filters['2'].length ? filters['2'].includes(level as QuestionLevel) : true
      ]
    });
  }

  selectMaximumVotesNumber(): Observable<number> {
    return this.selectAll({
      sortBy: (a, b) => a.votersIds.length < b.votersIds.length ? 1 : -1
    }).pipe(
      map(items => items[0]),
      map(item => item.votersIds.length)
    );
  }

}

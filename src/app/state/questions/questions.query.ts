import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { QuestionsStore, QuestionsState } from './questions.store';
import { Filter } from 'src/app/components/filters/filter.interface';
import { Question } from './question.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionsQuery extends QueryEntity<QuestionsState> {

  constructor(protected store: QuestionsStore) {
    super(store);
  }

  selectFiltered(filters): Observable<Question[]> {
    return this.selectAll({
      filterBy: [
        ({ type }) => filters['1'].length ? filters['1'].includes(type) : true,
        ({ level }) => filters['2'].length ? filters['2'].includes(level) : true
      ]
    });
  }

}

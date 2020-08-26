import { Injectable } from '@angular/core';
import { QuestionsStore } from './questions.store';
import { Question } from './question.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { questions } from './questions';

@Injectable({ providedIn: 'root' })
export class QuestionsService {

  constructor(
    private questionsStore: QuestionsStore,
  ) {
  }

  getQuestions(): Observable<Question[]> {
    return of(questions).pipe(
      tap(data => this.questionsStore.set(data))
    );
  }
}

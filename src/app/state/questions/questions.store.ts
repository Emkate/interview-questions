import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface QuestionsState extends EntityState<Question> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'questions' })
export class QuestionsStore extends EntityStore<QuestionsState> {

  constructor() {
    super();
  }

}


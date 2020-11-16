import { Injectable } from '@angular/core';
import { QuestionsStore } from './questions.store';
import { Question } from './question.model';
import { Observable, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { questions } from './questions';
import { QuestionsQuery } from './questions.query';

@Injectable({ providedIn: 'root' })
export class QuestionsService {

  constructor(
    private questionsStore: QuestionsStore,
    private questionsQuery: QuestionsQuery
  ) {
  }

  getQuestions(): Observable<Question[]> {
    return of(questions).pipe(
      tap(data => this.questionsStore.set(data))
    );
  }

  changeVoteAndUpdateQuestion(questionId: number, userId: number, action: 'upvote' | 'downvote'): Observable<Question> {
    return this.questionsQuery.selectEntity(questionId).pipe(
      take(1),
      map(question => {
        return {
          ...question,
          votersIds: action === 'upvote' ? [...question.votersIds, userId] : question.votersIds.filter(id => id !== userId)
        };
      }),
      tap(question => this.questionsStore.update(questionId, question))
    );
  }

  upvoteQuestion(questionId: number, userId: number): Observable<Question> {
    return this.changeVoteAndUpdateQuestion(questionId, userId, 'upvote');
  }

  downvoteQuestion(questionId: number, userId: number): Observable<Question> {
    return this.changeVoteAndUpdateQuestion(questionId, userId, 'downvote');
  }
}

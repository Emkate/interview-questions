import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/state/questions/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionModalService {
  public isModalOpen$: BehaviorSubject<Question> = new BehaviorSubject(null);

  closeModal(): void {
    this.isModalOpen$.next(null);
  }

  openModal(question: Question): void {
    this.isModalOpen$.next(question);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/state/questions/question.model';
import { QuestionsService } from 'src/app/state/questions/questions.service';
import { QuestionModalService } from '../question-modal/question-modal.service';

@Component({
  selector: 'app-questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrls: ['./questions-list-item.component.scss']
})
export class QuestionsListItemComponent implements OnInit {
  @Input() data: Question;
  votes: number;
  userId = 199;

  constructor(
    private questionModalService: QuestionModalService,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.votes = this.data.votersIds.length;
  }

  openModal(question: Question): void {
    this.questionModalService.openModal(question);
  }

  voteButtonClick(): void {
    this.data.votersIds.includes(this.userId) ? this.downvoteQuestion() : this.upvoteQuestion();
  }

  upvoteQuestion(): void {
    this.questionsService.upvoteQuestion(this.data.id, this.userId).subscribe();
  }

  downvoteQuestion(): void {
    this.questionsService.downvoteQuestion(this.data.id, this.userId).subscribe();
  }
}

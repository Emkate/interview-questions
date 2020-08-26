import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/state/questions/question.model';
import { QuestionModalService } from '../question-modal/question-modal.service';

@Component({
  selector: 'app-questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrls: ['./questions-list-item.component.scss']
})
export class QuestionsListItemComponent implements OnInit {
  @Input() data: Question;

  constructor(
    private questionModalService: QuestionModalService,
  ) { }

  ngOnInit(): void {
  }

  openModal(question: Question): void {
    this.questionModalService.openModal(question);
  }

}

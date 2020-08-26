import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/state/questions/questions.service';
import { QuestionsQuery } from 'src/app/state/questions/questions.query';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions$ = this.questionsQuery.selectAll();

  constructor(
    private questionsService: QuestionsService,
    private questionsQuery: QuestionsQuery
  ) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe();
  }

}

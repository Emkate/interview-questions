import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/state/questions/questions.service';
import { QuestionsQuery } from 'src/app/state/questions/questions.query';
import { switchMap } from 'rxjs/operators';
import { FiltersService } from '../filters/filters.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions$ = this.filtersService.currentFilters$.pipe(
    switchMap(filtersVal => this.questionsQuery.selectFiltered(filtersVal))
  );

  constructor(
    private questionsService: QuestionsService,
    private questionsQuery: QuestionsQuery,
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe();
  }

}

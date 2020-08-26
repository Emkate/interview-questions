import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/state/questions/question.model';

@Component({
  selector: 'app-questions-list-item',
  templateUrl: './questions-list-item.component.html',
  styleUrls: ['./questions-list-item.component.scss']
})
export class QuestionsListItemComponent implements OnInit {
  @Input() data: Question;

  constructor() { }

  ngOnInit(): void {
  }

}

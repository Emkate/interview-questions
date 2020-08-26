import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/state/questions/questions.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
  }

}

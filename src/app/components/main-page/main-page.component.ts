import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/state/questions/questions.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isFiltersVisible = false;

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
  }

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
    this.setBodyOverflow();
  }

  showFilters(): void {
    this.isFiltersVisible = true;
    this.setBodyOverflow();
  }

  hideFilters(): void {
    this.isFiltersVisible = false;
    this.setBodyOverflow();
  }

  setBodyOverflow(): void {
    this.isFiltersVisible ?
      document.body.classList.add('overflow-hidden') :
      document.body.classList.remove('overflow-hidden');
  }
}

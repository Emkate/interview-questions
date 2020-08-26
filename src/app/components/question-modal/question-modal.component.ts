import { Component, OnInit } from '@angular/core';
import { QuestionModalService } from './question-modal.service';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit {
  public open$ = this.questionModalService.isModalOpen$;

  constructor(
    private questionModalService: QuestionModalService
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.questionModalService.closeModal();
  }
}

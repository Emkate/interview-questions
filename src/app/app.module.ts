import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionsService } from './state/questions/questions.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { FilterTechnologyComponent } from './components/filter-technology/filter-technology.component';
import { FilterTechnologyItemComponent } from './components/filter-technology-item/filter-technology-item.component';
import { QuestionsListItemComponent } from './components/questions-list-item/questions-list-item.component';
import { FilterAdvancementComponent } from './components/filter-advancement/filter-advancement.component';
import { FilterAdvancementItemComponent } from './components/filter-advancement-item/filter-advancement-item.component';
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { QuestionModalService } from './components/question-modal/question-modal.service';
import { FiltersService } from './components/filters/filters.service';
import { FilterVotesComponent } from './components/filter-votes/filter-votes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    FiltersComponent,
    QuestionsListComponent,
    FilterTechnologyComponent,
    FilterTechnologyItemComponent,
    QuestionsListItemComponent,
    FilterAdvancementComponent,
    FilterAdvancementItemComponent,
    QuestionModalComponent,
    FilterVotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
  ],
  providers: [QuestionsService, QuestionModalService, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

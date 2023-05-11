import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';
import { LeftComponent } from './left/left.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { QuizpComponent } from './quizp/quizp.component';
import { QuestionComponent } from './question/question.component';
import { OptionComponent } from './option/option.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizComponent,
    LeftComponent,
    LoginComponent,
    BodyComponent,
    QuizpComponent,
    QuestionComponent,
    OptionComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

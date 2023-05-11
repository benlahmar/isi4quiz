import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizpComponent } from './quizp/quizp.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path:"quiz", component:QuizpComponent},
  {path:"quizt",component:QuizComponent},
  {path:"",redirectTo:"/theme",pathMatch:"full"},
  {path:"about", component:AboutComponent},
  {path:"theme", component:ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

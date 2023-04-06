import { Component, OnInit } from '@angular/core';
import { data } from '../data/asp';
import { Question } from '../model/question';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
 // qdata=data;
  qdata:Quiz;
  page:number =0;
mode:string="quiz";
constructor()
{
  this.qdata=new Quiz(data);
  console.log(this.qdata);
}

  goto(p:number)
  {
    this.page=p
  }

  changermod(m)
  {
    this.mode=m;
  }

  isselect(q:Question)
  {
    return !q.options.every(o=> o.isSelected==false);
  }
  iscorrect(q:Question)
  {
    return q.options.every(o=>o.isAnswer==o.isSelected); 
  }
}

import { Component, OnInit } from '@angular/core';
import { data } from '../data/asp';
import { Quiz } from '../model/quiz';

@Component({
  selector: 'app-quizp',
  templateUrl: './quizp.component.html',
  styleUrls: ['./quizp.component.css']
})
export class QuizpComponent implements OnInit {

  qdata:Quiz;
  page:number=0;
  constructor() {
    this.qdata=new Quiz(data)
   }

  ngOnInit(): void {
  }

  goto(x:number)
  {
    this.page=x;
  }

  recuper(e)
  {
    
    this.page=e.index;
  }
}

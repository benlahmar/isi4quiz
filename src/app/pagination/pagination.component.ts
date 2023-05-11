import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  p:number=0;

  @Input()
  nbpage:number;
  pages=[];

  @Output()
  handler=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<this.nbpage;i++)
    this.pages.push(i)
  }

  goto(x:number)
  {
    this.p=x;
    this.handler.emit({"index":this.p})
    
      
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  p:number=0;

  @Output()
  handler=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  goto(x:number)
  {
    this.p=x;
    this.handler.emit({"index":this.p})
    
      
  }
}

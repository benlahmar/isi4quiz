import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../model/option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input()
  op:Option;
  constructor() { }

  ngOnInit(): void {
  }

}

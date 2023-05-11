import { Component, OnInit } from '@angular/core';
import { themes } from '../data/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  datat= themes;
  constructor() { }

  ngOnInit(): void {
  }

}

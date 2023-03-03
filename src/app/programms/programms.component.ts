import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programms',
  templateUrl: './programms.component.html',
  styleUrls: ['./programms.component.css'],
})
export class ProgrammsComponent implements OnInit {
  collapsed = false;
  constructor() {}

  ngOnInit(): void {}
}

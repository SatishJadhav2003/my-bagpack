import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wt',
  templateUrl: './wt.component.html',
  styleUrls: ['./wt.component.css']
})
export class WtComponent implements OnInit {
  notes=true;
  pyq=false;

  onNotes(){
    this.notes=true;
    this.pyq=false;
  }
  onPyq(){
    this.pyq=true;
    this.notes=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

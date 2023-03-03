import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-ds',
  templateUrl: './intro-ds.component.html',
  styleUrls: ['./intro-ds.component.css']
})
export class IntroDSComponent implements OnInit {
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

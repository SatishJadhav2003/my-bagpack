import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-python',
  templateUrl: './intro-python.component.html',
  styleUrls: ['./intro-python.component.css']
})
export class IntroPythonComponent implements OnInit {
  notes=true;
  pyq = false;
  constructor() {}

  ngOnInit(): void {}

  onNotes() {
    this.notes = true;
    this.pyq = false;
  }

  onPyq(){
    this.notes = false;
    this.pyq = true;
  }
}

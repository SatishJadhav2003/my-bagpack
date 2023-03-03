import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finite-automata',
  templateUrl: './finite-automata.component.html',
  styleUrls: ['./finite-automata.component.css']
})
export class FiniteAutomataComponent implements OnInit {

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

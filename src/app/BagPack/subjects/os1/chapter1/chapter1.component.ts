import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component implements OnInit {
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

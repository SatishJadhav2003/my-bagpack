import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-java',
  templateUrl: './intro-java.component.html',
  styleUrls: ['./intro-java.component.css'],
})
export class IntroJavaComponent implements OnInit {
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

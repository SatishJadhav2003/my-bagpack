import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-layer',
  templateUrl: './application-layer.component.html',
  styleUrls: ['./application-layer.component.css']
})
export class ApplicationLayerComponent implements OnInit {
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

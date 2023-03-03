import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operating-system-programm',
  templateUrl: './operating-system-programm.component.html',
  styleUrls: ['./operating-system-programm.component.css']
})
export class OperatingSystemProgrammComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onAssignment1() {
    this.router.navigate(['Assignment-1'], {relativeTo: this.route});
    // it travers to Assignment-1 component
  }

  onAssignment2() {
    this.router.navigate(['Assignment-2'], {relativeTo: this.route});
  }

}

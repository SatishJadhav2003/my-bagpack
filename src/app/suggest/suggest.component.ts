import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css'],
})
export class SuggestComponent implements OnInit {
  @ViewChild('f') sForm!: NgForm;
  formSubmited = false;
  suggetion!: '';

  suggetionForm = {
    name: '',
    email: '',
    suggetion: '',
  };
  onSend(f:any) {
    this.formSubmited = true;
    const form = this.sForm.value;
    this.http
      .post('https://my-bagpack-default-rtdb.firebaseio.com/form.json', form)
      .subscribe((response) => {
        console.log(response);
      });
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}



  onSubmit(f:any) {
    console.log(f.value);

    this.suggetionForm.name = this.sForm.value.userData.name;
    this.suggetionForm.email = this.sForm.value.userData.email;
    this.suggetionForm.suggetion = this.sForm.value.userData.suggetion;

    this.sForm.reset();
  }

}

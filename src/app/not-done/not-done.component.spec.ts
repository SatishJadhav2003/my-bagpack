import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotDoneComponent } from './not-done.component';

describe('NotDoneComponent', () => {
  let component: NotDoneComponent;
  let fixture: ComponentFixture<NotDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

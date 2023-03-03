import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDSComponent } from './intro-ds.component';

describe('IntroDSComponent', () => {
  let component: IntroDSComponent;
  let fixture: ComponentFixture<IntroDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

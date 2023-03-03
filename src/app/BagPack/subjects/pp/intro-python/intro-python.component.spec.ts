import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPythonComponent } from './intro-python.component';

describe('IntroPythonComponent', () => {
  let component: IntroPythonComponent;
  let fixture: ComponentFixture<IntroPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroPythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

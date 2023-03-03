import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaProgrammsComponent } from './java-programms.component';

describe('JavaProgrammsComponent', () => {
  let component: JavaProgrammsComponent;
  let fixture: ComponentFixture<JavaProgrammsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaProgrammsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaProgrammsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

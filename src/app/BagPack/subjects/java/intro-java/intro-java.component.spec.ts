import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroJavaComponent } from './intro-java.component';

describe('IntroJavaComponent', () => {
  let component: IntroJavaComponent;
  let fixture: ComponentFixture<IntroJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

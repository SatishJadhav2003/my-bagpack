import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiniteAutomataComponent } from './finite-automata.component';

describe('FiniteAutomataComponent', () => {
  let component: FiniteAutomataComponent;
  let fixture: ComponentFixture<FiniteAutomataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiniteAutomataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiniteAutomataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

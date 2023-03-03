import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPComponent } from './pp.component';

describe('PPComponent', () => {
  let component: PPComponent;
  let fixture: ComponentFixture<PPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

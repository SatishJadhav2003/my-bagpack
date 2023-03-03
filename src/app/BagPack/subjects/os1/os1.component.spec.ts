import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Os1Component } from './os1.component';

describe('Os1Component', () => {
  let component: Os1Component;
  let fixture: ComponentFixture<Os1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Os1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Os1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

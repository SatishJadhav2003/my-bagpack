import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSA1Component } from './os-a1.component';

describe('OSA1Component', () => {
  let component: OSA1Component;
  let fixture: ComponentFixture<OSA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSA1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OSA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSA2Component } from './os-a2.component';

describe('OSA2Component', () => {
  let component: OSA2Component;
  let fixture: ComponentFixture<OSA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSA2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OSA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

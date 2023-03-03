import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerNetworks2Component } from './computer-networks2.component';

describe('ComputerNetworks2Component', () => {
  let component: ComputerNetworks2Component;
  let fixture: ComponentFixture<ComputerNetworks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerNetworks2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerNetworks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

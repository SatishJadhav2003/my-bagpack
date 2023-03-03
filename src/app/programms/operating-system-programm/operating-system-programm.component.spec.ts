import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemProgrammComponent } from './operating-system-programm.component';

describe('OperatingSystemProgrammComponent', () => {
  let component: OperatingSystemProgrammComponent;
  let fixture: ComponentFixture<OperatingSystemProgrammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingSystemProgrammComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingSystemProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

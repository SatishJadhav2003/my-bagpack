import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdsProgrammsComponent } from './fds-programms.component';

describe('FdsProgrammsComponent', () => {
  let component: FdsProgrammsComponent;
  let fixture: ComponentFixture<FdsProgrammsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdsProgrammsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdsProgrammsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

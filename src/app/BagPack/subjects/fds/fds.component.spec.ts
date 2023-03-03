import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdsComponent } from './fds.component';

describe('FdsComponent', () => {
  let component: FdsComponent;
  let fixture: ComponentFixture<FdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

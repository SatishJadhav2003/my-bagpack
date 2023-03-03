import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtComponent } from './wt.component';

describe('WtComponent', () => {
  let component: WtComponent;
  let fixture: ComponentFixture<WtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

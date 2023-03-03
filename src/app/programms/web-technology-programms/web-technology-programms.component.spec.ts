import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTechnologyProgrammsComponent } from './web-technology-programms.component';

describe('WebTechnologyProgrammsComponent', () => {
  let component: WebTechnologyProgrammsComponent;
  let fixture: ComponentFixture<WebTechnologyProgrammsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebTechnologyProgrammsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebTechnologyProgrammsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

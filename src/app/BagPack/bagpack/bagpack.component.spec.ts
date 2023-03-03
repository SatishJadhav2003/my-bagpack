import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagpackComponent } from './bagpack.component';

describe('BagpackComponent', () => {
  let component: BagpackComponent;
  let fixture: ComponentFixture<BagpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

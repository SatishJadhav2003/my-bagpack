import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToBlockchainComponent } from './intro-to-blockchain.component';

describe('IntroToBlockchainComponent', () => {
  let component: IntroToBlockchainComponent;
  let fixture: ComponentFixture<IntroToBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroToBlockchainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroToBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

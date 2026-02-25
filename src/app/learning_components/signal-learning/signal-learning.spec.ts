import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLearning } from './signal-learning';

describe('SignalLearning', () => {
  let component: SignalLearning;
  let fixture: ComponentFixture<SignalLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLearning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentDropdown } from './dependent-dropdown';

describe('DependentDropdown', () => {
  let component: DependentDropdown;
  let fixture: ComponentFixture<DependentDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependentDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

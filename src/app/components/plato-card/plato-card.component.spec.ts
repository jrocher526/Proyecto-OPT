import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoCardComponent } from './plato-card.component';

describe('PlatoCardComponent', () => {
  let component: PlatoCardComponent;
  let fixture: ComponentFixture<PlatoCardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

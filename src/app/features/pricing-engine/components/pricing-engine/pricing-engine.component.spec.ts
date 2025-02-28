import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingEngineComponent } from './pricing-engine.component';

describe('PricingEngineComponent', () => {
  let component: PricingEngineComponent;
  let fixture: ComponentFixture<PricingEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

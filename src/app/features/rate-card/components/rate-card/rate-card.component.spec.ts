import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCardComponent } from './rate-card.component';

describe('RateCardComponent', () => {
  let component: RateCardComponent;
  let fixture: ComponentFixture<RateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

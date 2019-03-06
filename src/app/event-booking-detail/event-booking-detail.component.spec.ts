import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingDetailComponent } from './event-booking-detail.component';

describe('EventBookingDetailComponent', () => {
  let component: EventBookingDetailComponent;
  let fixture: ComponentFixture<EventBookingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBookingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBookingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

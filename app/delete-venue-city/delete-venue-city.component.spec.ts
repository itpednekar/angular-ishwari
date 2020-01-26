import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVenueCityComponent } from './delete-venue-city.component';

describe('DeleteVenueCityComponent', () => {
  let component: DeleteVenueCityComponent;
  let fixture: ComponentFixture<DeleteVenueCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVenueCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVenueCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

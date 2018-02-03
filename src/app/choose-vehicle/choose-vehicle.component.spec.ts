import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseVehicleComponent } from './choose-vehicle.component';

describe('ChooseVehicleComponent', () => {
  let component: ChooseVehicleComponent;
  let fixture: ComponentFixture<ChooseVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

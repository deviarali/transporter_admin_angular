import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetOwnersComponent } from './fleet-owners.component';

describe('FleetOwnersComponent', () => {
  let component: FleetOwnersComponent;
  let fixture: ComponentFixture<FleetOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

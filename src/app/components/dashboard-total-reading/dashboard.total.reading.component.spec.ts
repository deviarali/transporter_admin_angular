import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTotalReadingComponent } from './dashboard.total.reading.component';

describe('DashboardTotalReadingComponent', () => {
  let component: DashboardTotalReadingComponent;
  let fixture: ComponentFixture<DashboardTotalReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTotalReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTotalReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

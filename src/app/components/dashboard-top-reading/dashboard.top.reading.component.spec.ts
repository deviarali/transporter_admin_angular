import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopReadingComponent } from './dashboard.top.reading.component';

describe('DashboardTopReadingComponent', () => {
  let component: DashboardTopReadingComponent;
  let fixture: ComponentFixture<DashboardTopReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTopReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

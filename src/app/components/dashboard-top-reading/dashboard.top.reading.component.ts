import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts'
import { AbstractClass } from 'src/app/abstract-class';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-top-reading',
  templateUrl: './dashboard.top.reading.component.html',
  styleUrls: ['./dashboard.top.reading.component.scss']
})
export class DashboardTopReadingComponent extends AbstractClass implements OnInit {

  public topEarners = [];
  public topSpenders = [];
  public topCancellations = [];
  public topComplaints = [];


  constructor(private _dashboardService: DashboardService) { super(); }

  ngOnInit(): void {

    this.topEarners = this.findTopFiveEarners();
    this.topSpenders = this.findTopFiveSpenders()
    this.topCancellations = this.findTopFiveCancellations();
    this.topComplaints = this.findTopFiveComplaints();
  }

  findTopFiveEarners() {

    return this._dashboardService.findTopFiveEarners();

  }

  findTopFiveSpenders() {

    return this._dashboardService.findTopFiveEarners();

  }

  findTopFiveCancellations() {

    return this._dashboardService.findTopFiveCancellations();

  }

  findTopFiveComplaints() {

    return this._dashboardService.findTopFiveComplaints();

  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['One', 'Two', 'Three', 'Four'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 0], label: 'Top Earners' }
  ];

}

import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import {AbstractClass} from '../../abstract-class';

@Component({
  selector: 'app-dashboard-total-reading',
  templateUrl: './dashboard.total.reading.component.html',
  styleUrls: ['./dashboard.total.reading.component.scss']
})
export class DashboardTotalReadingComponent extends AbstractClass implements OnInit {

  public totalRides = '0';
  public moneyEarned = '0';
  public moneySpent = '0';

  constructor(private _dashboardService: DashboardService) {
    super();
   }
  
  ngOnInit(): void {
    this.totalRides = this.getTotalRides();
    this.moneyEarned = this.getMoneyEarned();
    this.moneySpent = this.getMoneySpent();
  }

  

  getTotalRides() {
    return this.addZeroes(this._dashboardService.getTotalRides());
  }

  getMoneyEarned() {
    return this.addZeroes(this._dashboardService.getMoneyEarned());
  }

  getMoneySpent() {
    return this.addZeroes(this._dashboardService.getMoneySpent());
  }

}

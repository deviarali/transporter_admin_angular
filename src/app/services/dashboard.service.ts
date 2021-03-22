import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {DefaultService} from './default.service'

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends  DefaultService {

    constructor(private _httpClient: HttpClient) {
      super();
    }

    findTopFiveEarners() {

      // return this._httpClient.get(`${this.baseUrl}/customer/topFiveEarners`);
      return this.topEarnersStaticData;

    }

    findTopFiveSpenders() {

      // return this._httpClient.get(`${this.baseUrl}/customer/topFiveSpenders`);

      return this.topEarnersStaticData;
    }

    findTopFiveCancellations() {

      // return this._httpClient.get(`${this.baseUrl}/customer/topFiveCancellations`);

      return this.topCancellationsStaticData;
    }

    findTopFiveComplaints() {

      // return this._httpClient.get(`${this.baseUrl}/customer/topFiveComplaints`);

      return this.topComplaintsStaticData;
    }

    getTotalRides() {

      // return this._httpClient.get(`${this.baseUrl}/customer/getTotalRides`);

      return Math.round(500.06);
    }

    getMoneyEarned() {

      // return this._httpClient.get(`${this.baseUrl}/customer/getMoneyEarned`);

      return 50000;
    }

    getMoneySpent() {

      // return this._httpClient.get(`${this.baseUrl}/customer/getMoneySpent`);

      return 25000;
    }
    
  
  public topEarnersStaticData = [
    { slNo: 1, name: 'Ankush Narayan', rides: 5, earned: 2500.00 },
    { slNo: 2, name: 'Ajay', rides: 5, earned: 2500.00 },
    { slNo: 3, name: 'Ajay', rides: 5, earned: 2500.00 },
    { slNo: 5, name: 'Ankush Narayan Narayan', rides: 5, earned: 2500.00 },
    { slNo: 5, name: 'Ajay', rides: 5, earned: 2500.00 },
  ];

  public topCancellationsStaticData = [
    { slNo: 1, name: 'Ankush Narayan', reason: 'Reason for cancellation', charge: '2,500.00' },
    { slNo: 2, name: 'Ankush Narayan', reason: 'Reason for cancellation', charge: '2,500.00' },
    { slNo: 3, name: 'Ankush', reason: 'Reason for cancellation', charge: '2,500.00' },
    { slNo: 4, name: 'Ankush Narayan', reason: 'Reason for cancellation', charge: '2,500.00' },
    { slNo: 5, name: 'Ankush Narayan', reason: 'Reason for cancellation', charge: '2,500.00' },
  ];

  public topComplaintsStaticData = [
    { slNo: 1, name: 'Ankush Narayan', issue: 'Reason goes here', status: 'Solved' },
    { slNo: 2, name: 'Ankush', issue: 'Reason goes here', status: 'Solved' },
    { slNo: 3, name: 'Ankush Narayan', issue: 'Reason goes here', status: 'Solved' },
    { slNo: 4, name: 'Ankush', issue: 'Reason goes here', status: 'In Process' },
    { slNo: 5, name: 'Ankush Narayan', issue: 'Reason goes here', status: 'Pending' },
  ];
}

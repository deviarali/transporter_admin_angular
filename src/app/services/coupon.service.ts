import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from "../models/customer";
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService  extends DefaultService{

  constructor(private _httpClient: HttpClient) { super();}


   //get All Coupon
   public getgetAllCouponCode() {
    return this._httpClient.get(`${this.baseUrl}/coupon/getAllActiveCoupon`);
  }

  public getAllActiveCoupon()
  {
  return this._httpClient.get(`${this.baseUrl}/coupon/getAllActiveCoupon`);
  }
}

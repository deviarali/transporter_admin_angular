import { Component, OnInit } from '@angular/core';
import {CouponService} from 'src/app/services/coupon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  couponForm: FormGroup
  public submitted: boolean = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private _couponService: CouponService,
    private _router: Router) { }

  ngOnInit(): void {

    this.getAllCouponCode();
  }

  public getAllCouponCode() {
this._couponService.getgetAllCouponCode().subscribe(data=>{
  console.log("data from Allcoupon",data)
})
 }

public getAllActiveCoupon(){
  this._couponService.getAllActiveCoupon().subscribe(data=>{
    console.log("data from Activecoupon",data);
  })
}

}

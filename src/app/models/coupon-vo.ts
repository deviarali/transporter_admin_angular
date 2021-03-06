
import {UserVo} from '../models/user-vo';
import {CouponDiscountType} from '../enums/coupon-discount-type.enum';

export class CouponVo {

    id: number;

	couponCode: string;

	discountType:CouponDiscountType;

	 amountOrPercentage:number;

	isActive: boolean;

	firstRide: boolean;
	referral: boolean;

	startDate:Date;

	endDate:Date;

	updatedOn:Date;

	createdOn:Date;

	rideNumber:number;

	applyUsers : UserVo;

	 exludeUsers : UserVo;
}

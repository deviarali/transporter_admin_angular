
import {DriverDetailsVo} from '../models/driver-details-vo';
import {CustomerDetailsVo} from '../models/customer-details-vo';
import {DeliveryStatusVo} from '../models/delivery-status-vo';
import {TripDetailsHistoryVo} from '../models/trip-details-history-vo';



export class TripDetailsVo {

    id:number;

	amount:string;

	amountToApp:string;

	amountToDriver:string;

	cancelledReason:string;

	cancelledAmountFromCustomer:string;

	cancelledAmountFromDriver: string;

	cancelledAmountStatus:number;

	cashMode:string;

	deliveryPersonMobile:string;

	deliveryPersonName:string;

	destinationLocation:string;

	goodsSize:string;

	goodsType:string;

	sourceLocation:string;

	pickupPersonMobile:string;

	pickupPersonName:string;

	ratings:string;

	tripEndtime:Date;

	tripStarttime:Date;

	tripTime:Date;

	tripEndOtp:string;

	tripStartOtp:string;

	driverDetails:DriverDetailsVo;

	customerDetails:CustomerDetailsVo;

	deliveryStatus:DeliveryStatusVo;
	
	customerId:number;
	
	driverId:number;
	
	sourceLattitude:number;
	
	sourceLongitude:number;

	destinationLattitude:number;

	destinationLongitude:number;

	sourceLandmark:string;

	destinationLandmark:string;
    
	tripStatus:string;

	tripHistoryJson:string;

	vehicleType:number;

	tripDetailsHistory:TripDetailsHistoryVo;

	capacity:number;

	kms:number;
    
	cgst:number;
	sgst:number;

	rideFare:number;
}

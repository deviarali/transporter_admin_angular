

import {UserVo} from '../models/user-vo';
import {VehicleDetailsVo} from '../models/vehicle-details-vo';
import {TripDetailsVo} from '../models/trip-details-vo';

export class DriverDetailsVo {
id:number;

	addressCity:string;

	addressState:string;

	addressStreet:string;

	addressZipcode:string;

	createdOn:Date;

	dateofbirth:Date;

	driverDocuments:string;

	driverVerificationPendingReason:string;

	driverVerificationStatus:string;

	drivername:string;

	onRoad:number;

	ratings:string;

	transportType:string;

	 createdBy:UserVo;

	 user:UserVo;

	 verifedBy:UserVo;

	vehicleDetailsVoList:VehicleDetailsVo;

	tripDetailsVoList:TripDetailsVo;

	currentLattitude:number;

	currentLongitude:number;
	
	adharcardPictureUrl:string;
	
	drivingLicencePictureUrl:string;
	
	mobileNumber:string;
		
	ridingStatus:number;

}

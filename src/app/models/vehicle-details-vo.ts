
import {VehicleTypeVo} from '../models/vehicle-type-vo';
import {DriverDetailsVo} from '../models/driver-details-vo';



export class VehicleDetailsVo {
   
    id:number;

	createdOn:Date;

	vehicleColor:string;

	vehicleDocuments:string;

	vehicleModel:string;

	vehicleNum:string;

	vehicleTypeVo:VehicleTypeVo;

	vehicleVerificationPendingReason:string;

	vehicleVerificationStatus:string

	createdBy:string;

	driverDetails:DriverDetailsVo;

	verifiedBy:string;
	
	currentLattitude:number;
	
	currentLongitude:number;

	vehicleName:string;
}

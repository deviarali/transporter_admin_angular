
import {CustomerDetailsVo} from '../models/customer-details-vo'
import {DriverDetailsVo} from '../models/driver-details-vo';
import {UserRoleVo} from '../models/user-role-vo';
import {InternalUserDetailsVo} from '../models/internal-user-details-vo';


export class UserVo {

    id:number;

	createdBy:Number;

	createdOn:Date;

	emailId:string;

	emailVerified:string;

	firstName:string;

	gender:string;

	lastName:string;

	loginOtp:string;

	loginTime:Date;

	noOfVehicles:number;

	password:string;

	mobileNumber:string;

	previousEmailId:string;

	status:number;

	transporterId:number;

	 customerDetails:CustomerDetailsVo;

	driverDetails:DriverDetailsVo;

	userRole:UserRoleVo;

	internalUserDetails:InternalUserDetailsVo;

	profilePictureUrl:string;
	
	fcmToken:string;
}

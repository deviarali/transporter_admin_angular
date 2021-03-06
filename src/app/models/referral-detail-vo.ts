
import {UserVo} from '../models/user-vo';
export class ReferralDetailVo {
    id:number;

	isActive:boolean;

	createdOn:Date;

	referredUser:UserVo;

	referreeUser:UserVo;
}

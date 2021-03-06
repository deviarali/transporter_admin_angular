

import {InternalUserRoleMasterVo}from '../models/internal-user-role-master-vo';
import { UserVo}  from '../models/user-vo';


export class InternalUserDetailsVo {

    id:number;

	 activeInternal:number;

	addressCity:string;

	addressState:string;

	addressStreet:string;

	addressZipcode:string;

	dateofbirth:Date;

	internalUserroleMaster:InternalUserRoleMasterVo;

	user:UserVo;
}

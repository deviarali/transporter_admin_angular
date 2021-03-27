import { UserVo } from './user-vo';


export class VehicleTypeVo {

    id:number;

	capacity:number;

	size:number;
	
	vehicleName:string;

	price:number;

	createdBy:UserVo;

	selectedVehicleUrl:string;

	 height:number;

	width:number;

	length:number;

	unselectedVehicleUrl:string;
	
	 selectedVehicle:any;
	
	unSelectedVehicle:any;
	
	perKm:number;
	
	minKm:number;
}


import {ExceptionMasterVo} from '../models/exception-master-vo';

export class ExceptionMasterExecutionVo {

    id:number;

	exceptionClass:string;

	exceptionMessage:string;

	exceptionTime:Date;

	exceptionMasterVo: ExceptionMasterVo;
}

import { UserVo } from '../models/user-vo';
import { TripDetailsVo } from '../models/trip-details-vo';

export class CustomerDetailsVo {
  id: number;

  addressState: string;

  addressZipcode: string;

  dateofbirth: Date;

  user: UserVo;

  tripDetailsVoList: TripDetailsVo[];
}

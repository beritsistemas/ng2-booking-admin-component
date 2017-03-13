import {  RoomTypeData} from './roomTypeData';
import {  RoomType} from './roomType';
export interface AppStore {
  roomTypeData:RoomTypeData[];

  selectedRoomTypeData:RoomTypeData;

  typeOfRooms:RoomType[]
}
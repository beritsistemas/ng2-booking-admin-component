import {DayInfo  } from './dayInfo';
export interface RoomTypeData{
    readonly id:Number;
    readonly yearMonth:String;
    
     dayInfos:DayInfo[];
}
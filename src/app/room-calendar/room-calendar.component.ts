import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RoomTypeData } from '../shared/roomTypeData';

import { RoomType } from '../shared/roomType';
import {DateFunctions} from '../shared/DateFunctions';

import {  TypeOfRoomsService} from '../services/typeOfRooms.service';
import {  RoomTypeDataService} from '../services/roomTypeData.service';

import {AppStore} from '../shared/appStore';

import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-room-calendar',
  template: `
  <app-room-month [yearmonth]="yearmonth" [typeOfRooms]="typeOfRooms" [roomTypeDatas]="roomTypeDatas" (dayInfoChange)="dayInfoChange($event)" (monthChange)="monthChange($event)"></app-room-month>
  `,
  styleUrls: ['./room-calendar.component.css']
})
export class RoomCalendarComponent implements OnInit {

  /**
   * Initial input date to start a month
   * @format YYYYMM
   * 
   */
  @Input() yearmonth:String;



  roomTypeDatas:RoomTypeData[];//aca tendria la lista de tipos de habitacion y los datos mensuales, segun lo q seleccionan entonces creo la vista mensual

  roomTypeDatasObservable:Observable<Array<RoomTypeData>>;//aca tendria la lista de tipos de habitacion y los datos mensuales, segun lo q seleccionan entonces creo la vista mensual

  typeOfRooms:RoomType[]; 

  typeOfRoomsObservable:Observable<Array<RoomType>>; 



  constructor(private service: RoomTypeDataService
              ,private typeOfRoomsService: TypeOfRoomsService,
               private store: Store<AppStore>) {

   this.roomTypeDatasObservable = store.select('roomTypeDatas');
   this.typeOfRoomsObservable = store.select('typeOfRooms');

    this.typeOfRoomsObservable.subscribe(data=>{
      console.log("llego la lista de habitaciones")
      this.typeOfRooms=data
        
    })

    this.roomTypeDatasObservable.subscribe(data=>{
      console.log("llego roomTypeDatasObservable",data)
      if(data)
       this.roomTypeDatas=data
        
    })
    if(!this.yearmonth||this.yearmonth==""){
      var today=new Date();
      var month=((today.getMonth()+1).toString().length==1?"0"+(today.getMonth()+1):(today.getMonth()+1))
      this.yearmonth=today.getFullYear()+""+month
    }
     typeOfRoomsService.loadData();
     service.loadData(this.yearmonth);
 



  }

  ngOnInit() {
  }
  dayInfoChange({roomTypeData,dayInfo}){
      this.service.updateDayInfo(roomTypeData,dayInfo);  //send both ex-profeso
  }
  monthChange(newDate){
    this.yearmonth=DateFunctions.getYYYYMM(newDate);
    this.service.loadData(newDate);

  }
}

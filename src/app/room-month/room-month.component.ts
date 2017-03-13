import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RoomTypeData } from '../shared/roomTypeData';

import { RoomType } from '../shared/roomType';


import {  RoomTypeDataService} from '../services/roomTypeData.service';

import {AppStore} from '../shared/appStore';

import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-room-month',
  //templateUrl: './room-month.component.html',
  template:` <div class="row"><div class="col-sm-3"><h2>Select your room</h2></div>
  <div class="col-sm-3">
  <select #roomType (change)="selectRoomType()" [(ngModel)]="selectedTypeRoom" class="form-control">
    <option *ngFor="let obj of typeOfRooms;let i = index" [selected]="i==0" [value]="obj.id">{{obj.name}}</option>
</select></div></div>

<app-month [yearmonth]="yearmonth" [roomTypeData]="selectedRoomTypeData"  (dayInfoChange)="dayInfoChangeListener($event)" (monthChange)="monthChangeListener($event)"></app-month> 
`,
  styleUrls: ['./room-month.component.css'],//
   providers: [RoomTypeDataService],
})
export class RoomMonthComponent implements OnInit {



  /**
   * Initial input date to start a month
   * @format YYYYMM
   * 
   */
  @Input() yearmonth:String;

  selectedRoomTypeData:RoomTypeData;
  
   _roomTypeDatas:RoomTypeData[]
  @Input() 
  set roomTypeDatas(value:RoomTypeData[]){
    this._roomTypeDatas=value;
    this.selectRoomType()

  };//aca tendria la lista de tipos de habitacion y los datos mensuales, segun lo q seleccionan entonces creo la vista mensual
  get roomTypeDatas():RoomTypeData[]{
    return this._roomTypeDatas
  }


  _typeOfRooms:[RoomType]; 
  //
  @Input() 
  set typeOfRooms(value:[RoomType]){   
   if(this.selectedTypeRoom==-1&&value&&value.length>0){
      this.selectedTypeRoom=value[0].id
   }
   this. _typeOfRooms=value;
  } 
  get typeOfRooms():[RoomType]{
    return this._typeOfRooms
  }

  selectedTypeRoom:Number=-1;

  @Output() dayInfoChange:EventEmitter<any>=new EventEmitter();

  @Output() monthChange:EventEmitter<Date>=new EventEmitter<Date>()

  
  ngOnInit() {
  }

  selectRoomType(){
       console.log("Id habitacion seleccionado",this.selectedTypeRoom);
      

         if(this.roomTypeDatas&&this.selectedTypeRoom){

          this.selectedRoomTypeData=this.roomTypeDatas.filter((roomTypeData)=>roomTypeData.id==this.selectedTypeRoom)[0]; //TODO clonar el objecto
          }
  }

  dayInfoChangeListener(value){
      console.log("llega evento del dayField a Room-Month ",value);
      let newSelectedRoomTypeData=Object.assign({}, this.selectedRoomTypeData); //tengo una nueva copia del modelo asi no piso nada
         
     var newDayInfo=newSelectedRoomTypeData.dayInfos.map(item => {
        return item.date === value.date ||true?  value:item;
      });
      newSelectedRoomTypeData.dayInfos=newDayInfo;
  
        console.log("modifico modulo interno ", newSelectedRoomTypeData);
    
        this.dayInfoChange.emit({roomTypeData: newSelectedRoomTypeData
                        ,dayInfo:value
        })
    //  this.service.updateDayInfo(newSelectedRoomTypeData,value);  //send both ex-profeso
}
   monthChangeListener(value){     
      this.monthChange.emit(value)
   }

}

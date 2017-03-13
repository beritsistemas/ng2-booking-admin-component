import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {DayInfo} from '../shared/dayInfo';

@Component({
  selector: 'app-day-field',
 // templateUrl: './day-field.component.html',
 template:`
 
 <div [ngClass]="{serverWait: serverWait,'fc-other-month':otherMonth}" *ngIf="!otherMonth&&!serverWait">
                                                        <div class="fc-day-number">{{dayNumber}}</div>
                                                        <div class="fc-day-content">

 <div class="col-xs-12 ">
     <app-campo titulo="Precio" [title_inline]="true" [value]="dayInfo.price" (changeValue)="changeValue('price',$event)" [editable]="editable" [isMoney]="true"></app-campo>
</div>

<div ><div class="col-xs-6 ">
     <app-campo titulo="Disponibilidad"  [title_inline]="false" [value]="dayInfo.availability" (changeValue)="changeValue('availability',$event)" [editable]="editable" [isMoney]="false"></app-campo>
</div>
<div class="col-xs-6 ">
     <app-campo titulo="Noches" [title_inline]="false" [value]="dayInfo.min_nigths" (changeValue)="changeValue('min_nigths',$event)" [editable]="editable" [isMoney]="false"></app-campo>
</div>
</div>                                                           
                                                          
    </div>
</div>
<div *ngIf="serverWait" class="spinDiv">
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
</div>

`,
  styleUrls: ['./day-field.component.css']
})
export class DayFieldComponent implements OnInit {

  constructor() { }
  
  //internal working copy
  _dayInfo:DayInfo=new DayInfo(); 
  
  @Input("dayInfo") //object with data for a day  
  set dayInfo(value: DayInfo){
    this._dayInfo =value;// Object.assign({}, value);

    this.serverWait=false
    this.editable=true
    this.otherMonth=false;
  }
  get dayInfo(): DayInfo {
    return this._dayInfo;
}
  @Output() dayInfoChange:EventEmitter<DayInfo>=new EventEmitter<DayInfo>()

  @Input() dayNumber;

  @Input() otherMonth:Boolean=false;

  serverWait:Boolean=false;
  editable:Boolean=false;

  ngOnInit() {
  }
  

  changeValue(type,value){
    console.log("cambio type"+type+"-"+value);
    
    let newDayInfo=Object.assign({},this.dayInfo);
    newDayInfo[type]=value;
    /*this.serverWait[type]=true;
     
    */


    this.serverWait=true
    this.editable=false

    console.log("Nuevo datyInfo y emito",newDayInfo);
    this.dayInfoChange.emit(newDayInfo);

    /*
    setTimeout(()=>{
      console.log("aca"+type,this.serverWait);
      this.serverWait[type]=false;
    },5000);*/
  }

}

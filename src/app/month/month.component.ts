import { Component, OnInit,Input ,Output,ViewChild,EventEmitter} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {  RoomTypeData} from '../shared/roomTypeData';
import { DayFieldComponent } from '../day-field/day-field.component';

import {DayInfo} from '../shared/dayInfo';
import {DateFunctions} from '../shared/DateFunctions';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {


  /**
   * Initial input date to start a month
   * @format YYYYMM
   * 
   */
  @Input() yearmonth:String;

@ViewChild('fila0100') fila0100:DayFieldComponent
@ViewChild('fila0101') fila0101:DayFieldComponent
@ViewChild('fila0102') fila0102:DayFieldComponent
@ViewChild('fila0103') fila0103:DayFieldComponent
@ViewChild('fila0104') fila0104:DayFieldComponent
@ViewChild('fila0105') fila0105:DayFieldComponent
@ViewChild('fila0106') fila0106:DayFieldComponent
@ViewChild('fila0200') fila0200:DayFieldComponent
@ViewChild('fila0201') fila0201:DayFieldComponent
@ViewChild('fila0202') fila0202:DayFieldComponent
@ViewChild('fila0203') fila0203:DayFieldComponent
@ViewChild('fila0204') fila0204:DayFieldComponent
@ViewChild('fila0205') fila0205:DayFieldComponent
@ViewChild('fila0206') fila0206:DayFieldComponent
@ViewChild('fila0300') fila0300:DayFieldComponent
@ViewChild('fila0301') fila0301:DayFieldComponent
@ViewChild('fila0302') fila0302:DayFieldComponent
@ViewChild('fila0303') fila0303:DayFieldComponent
@ViewChild('fila0304') fila0304:DayFieldComponent
@ViewChild('fila0305') fila0305:DayFieldComponent
@ViewChild('fila0306') fila0306:DayFieldComponent
@ViewChild('fila0400') fila0400:DayFieldComponent
@ViewChild('fila0401') fila0401:DayFieldComponent
@ViewChild('fila0402') fila0402:DayFieldComponent
@ViewChild('fila0403') fila0403:DayFieldComponent
@ViewChild('fila0404') fila0404:DayFieldComponent
@ViewChild('fila0405') fila0405:DayFieldComponent
@ViewChild('fila0406') fila0406:DayFieldComponent
@ViewChild('fila0500') fila0500:DayFieldComponent
@ViewChild('fila0501') fila0501:DayFieldComponent
@ViewChild('fila0502') fila0502:DayFieldComponent
@ViewChild('fila0503') fila0503:DayFieldComponent
@ViewChild('fila0504') fila0504:DayFieldComponent
@ViewChild('fila0505') fila0505:DayFieldComponent
@ViewChild('fila0506') fila0506:DayFieldComponent
@ViewChild('fila0500') fila0600:DayFieldComponent
@ViewChild('fila0601') fila0601:DayFieldComponent
@ViewChild('fila0602') fila0602:DayFieldComponent
@ViewChild('fila0603') fila0603:DayFieldComponent
@ViewChild('fila0604') fila0604:DayFieldComponent
@ViewChild('fila0605') fila0605:DayFieldComponent
@ViewChild('fila0606') fila0606:DayFieldComponent


  _roomTypeData:RoomTypeData;

  /**
   * It arrives a room avaivility,price,etc
   * 
   */
  @Input("roomTypeData")
  set roomTypeData(value:RoomTypeData){
    if(value){
    this._roomTypeData=value;
    console.log("llego roomTypeData a MonthComponent",value);
    //create the month??

    this.serverWait=false;  
    //the serverWait doesnt render the component yet
    setTimeout(()=>
    this.asignData(),0);

    }
  } 
  get roomTypeData():RoomTypeData{
    return this._roomTypeData
  }

 
  @Output() dayInfoChange:EventEmitter<DayInfo>=new EventEmitter<DayInfo>()

  @Output() monthChange:EventEmitter<Date>=new EventEmitter<Date>()

  serverWait:Boolean=true;
  
  constructor() { }


  ngOnInit() {
  }

  asignData(){ 
  
     let month=Number(this._roomTypeData.yearMonth.substr(4));
     let dayInfos=this._roomTypeData.dayInfos;
     console.log(dayInfos)
     
      var dateString  = this._roomTypeData.yearMonth+"01";
      var year        = dateString.substring(0,4);
      var month1       = dateString.substring(4,6);
      var day         = dateString.substring(6,8);

      var fecha        = DateFunctions.getDateFromYYYYMMDD(dateString);


     let fila=1;
     let dia=fecha.getUTCDay() //get values from 0 to 6
     let offsetInicial=dia
     console.log("Fecha"+this._roomTypeData.yearMonth+"01",fecha);
     console.log("Mes",month);

     //complete first row and hide the days I
     for(let i=1;i<offsetInicial;i++){
           let comp:DayFieldComponent=this["fila010"+i];
           if(comp){
              comp.otherMonth=true
           }
     }

      while (fecha.getMonth()+1 == month) {
            let comp=this["fila0"+fila+"0"+dia];
            let fechaString=DateFunctions.getYYYYMMDD(fecha)


           //  console.log("fila0"+fila+"0"+dia+"fecha:"+fechaString,dayInfos.length);
            //console.log(comp);
            if(comp){
             // console.log("Hay componente fila0"+fila+"0"+dia);
               comp.dayNumber=fecha.getDate();
               for(let i=0;i<dayInfos.length;i=i+1){//iterate over all dayInfo object to find the actual for the date
                // console.log("Iteracion "+i+"Day info actual"+dayInfos[i].date,dayInfos[i]+"<<--"+fechaString);
                    if(fechaString==dayInfos[i].date){
                    //  console.log("Encontre fila0"+fila+"0"+dia,fechaString);
                      comp.dayInfo=dayInfos[i]; 
                    }
               } 

            }else{
              console.log("no hay componente"+"fila0"+fila+"0"+dia)
            }
            if(dia==0){//when I finish the 6 day, I increment the row
                          fila++
                        }
            fecha.setDate(fecha.getDate() + 1);
            dia=fecha.getUTCDay() 
           
      }
      while(fila<=6){
            let comp:DayFieldComponent=this["fila0"+fila+"0"+dia];
            if(comp){
              comp.otherMonth=true
            }
         
            if(dia==0){
                          fila++
                        }

             fecha.setDate(fecha.getDate() + 1);
            dia=fecha.getUTCDay()  
      }

  }


  dayInfoChangeListener(value){
    console.log("llega evento del dayField ",value);
    this.dayInfoChange.emit(value);
  }

  addMonth(value){
      //sumo o resto un mes o puede venir de un select
       console.log("Cambio de mes",this.yearmonth); 
       let newDate:Date=DateFunctions.addMonth(DateFunctions.getDateFromYYYYMMDD(this.yearmonth+"01"),value); 
       console.log("Emitiendo cambio de mes")
      this.serverWait=true;  
      this.monthChange.emit(newDate)//cambiar mes actual
  }

}

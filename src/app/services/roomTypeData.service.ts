import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../shared/appStore';
import {RoomTypeData} from '../shared/roomTypeData';

import { DayInfo } from '../shared/DayInfo';
import {  DateFunctions} from '../shared/DateFunctions';


const BASE_URL = 'http://localhost:3000/rooms-apm/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class RoomTypeDataService {
  roomTypeDatas: Observable<Array<RoomTypeData>>;
    selectedRoomTypeData: Observable<RoomTypeData>;


  constructor(private http: Http,private store: Store<AppStore>) {
    this.roomTypeDatas = store.select('roomTypeDatas'); // Bind an observable of our items to "ItemsService"
    this.selectedRoomTypeData=store.select('selectedRoomTypeData');
  }

  loadData(yearMonth){
    console.log(typeof yearMonth)
    if(typeof yearMonth=='object'){
        yearMonth=DateFunctions.getYYYYMM( yearMonth)
    }
    
    
    this.http.get(BASE_URL+yearMonth)
      .map(res => res.json())
      //.map(payload => ({ type: 'ADD_ITEMS', payload:payload }))
      .subscribe(data =>{
        console.log(data)
        this.store.dispatch({ type: 'ADD_ITEMS', payload:data })
      });
       

/*

  setTimeout(()=>{
    let values;
    if(yearMonth=="201705"){
       values=[{id:5,yearMonth:"201705",dayInfos:[{date:"20170501",price:28,availability:3,min_nigths:1 },
{date:"20170502",price:71,availability:3,min_nigths:1 },
{date:"20170503",price:12,availability:3,min_nigths:1 },
{date:"20170504",price:49,availability:3,min_nigths:1 },
{date:"20170505",price:89,availability:3,min_nigths:1 },
{date:"20170506",price:82,availability:3,min_nigths:1 },
{date:"20170507",price:98,availability:3,min_nigths:1 },
{date:"20170508",price:53,availability:3,min_nigths:1 },
{date:"20170509",price:83,availability:3,min_nigths:1 },
{date:"20170510",price:67,availability:3,min_nigths:1 },
{date:"20170511",price:51,availability:3,min_nigths:1 },
{date:"20170512",price:40,availability:3,min_nigths:1 },
{date:"20170513",price:83,availability:3,min_nigths:1 },
{date:"20170514",price:26,availability:3,min_nigths:1 },
{date:"20170515",price:89,availability:3,min_nigths:1 },
{date:"20170516",price:56,availability:3,min_nigths:1 },
{date:"20170517",price:59,availability:3,min_nigths:1 },
{date:"20170518",price:69,availability:3,min_nigths:1 },
{date:"20170519",price:25,availability:3,min_nigths:1 },
{date:"20170520",price:23,availability:3,min_nigths:1 },
{date:"20170521",price:69,availability:3,min_nigths:1 },
{date:"20170522",price:60,availability:3,min_nigths:1 },
{date:"20170523",price:57,availability:3,min_nigths:1 },
{date:"20170524",price:71,availability:3,min_nigths:1 },
{date:"20170525",price:64,availability:3,min_nigths:1 },
{date:"20170526",price:34,availability:3,min_nigths:1 },
{date:"20170527",price:70,availability:3,min_nigths:1 },
{date:"20170528",price:81,availability:3,min_nigths:1 },
{date:"20170529",price:16,availability:3,min_nigths:1 },
{date:"20170530",price:33,availability:3,min_nigths:1 },
{date:"20170531",price:55,availability:3,min_nigths:1 }]},

{id:6,yearMonth:"201705",dayInfos:[{date:"20170501",price:93,availability:3,min_nigths:1 },
{date:"20170502",price:33,availability:3,min_nigths:1 },
{date:"20170503",price:94,availability:3,min_nigths:1 },
{date:"20170504",price:82,availability:3,min_nigths:1 },
{date:"20170505",price:36,availability:3,min_nigths:1 },
{date:"20170506",price:24,availability:3,min_nigths:1 },
{date:"20170507",price:42,availability:3,min_nigths:1 },
{date:"20170508",price:10,availability:3,min_nigths:1 },
{date:"20170509",price:23,availability:3,min_nigths:1 },
{date:"20170510",price:69,availability:3,min_nigths:1 },
{date:"20170511",price:62,availability:3,min_nigths:1 },
{date:"20170512",price:85,availability:3,min_nigths:1 },
{date:"20170513",price:62,availability:3,min_nigths:1 },
{date:"20170514",price:38,availability:3,min_nigths:1 },
{date:"20170515",price:43,availability:3,min_nigths:1 },
{date:"20170516",price:60,availability:3,min_nigths:1 },
{date:"20170517",price:53,availability:3,min_nigths:1 },
{date:"20170518",price:43,availability:3,min_nigths:1 },
{date:"20170519",price:41,availability:3,min_nigths:1 },
{date:"20170520",price:49,availability:3,min_nigths:1 },
{date:"20170521",price:41,availability:3,min_nigths:1 },
{date:"20170522",price:43,availability:3,min_nigths:1 },
{date:"20170523",price:39,availability:3,min_nigths:1 },
{date:"20170524",price:61,availability:3,min_nigths:1 },
{date:"20170525",price:89,availability:3,min_nigths:1 },
{date:"20170526",price:59,availability:3,min_nigths:1 },
{date:"20170527",price:24,availability:3,min_nigths:1 },
{date:"20170528",price:28,availability:3,min_nigths:1 },
{date:"20170529",price:32,availability:3,min_nigths:1 },
{date:"20170530",price:31,availability:3,min_nigths:1 },
{date:"20170531",price:21,availability:3,min_nigths:1 }]} 

];
    }else{
      let defaultValues={
          price:100,availability:3,min_nigths:1 }
      
      let dayInfos=[];
      
      var year        = yearMonth.substring(0,4);
      var month1       = yearMonth.substring(4,6);
      var fecha        = new Date(Number(year), Number(month1)-1, 1);

       while (fecha.getMonth()+1 == month1) {
          let day=fecha.getDate();
          dayInfos.push(Object.assign({date:yearMonth+(day.toString().length==1?"0"+day:day)},defaultValues));
          fecha.setDate(fecha.getDate() + 1);
       } 

        values= [{id:5,yearMonth:yearMonth,dayInfos:dayInfos},{id:6,yearMonth:yearMonth,dayInfos:dayInfos}];
    }

      this.store.dispatch({ type: 'ADD_ITEMS',payload: values   })

         },2000);*/
  }
   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  updateDayInfo(selectedRoomTypeData:RoomTypeData,item: DayInfo) {
   // let toServer=Object.assign({id:selectedRoomTypeData.id},item)
    let yearMonth=item.date.substr(0,6);  
        
    this.http.put(`${BASE_URL}${selectedRoomTypeData.id}/${yearMonth}`, JSON.stringify(item), HEADER)
    .map(res => res.json())
      .subscribe(action =>{
        console.log(action)
       this.store.dispatch({ type: 'UPDATE_ITEM', payload: action })
       
       });

       //  .map
       //VOY A ENVIAR dayInfo solo con el roomId! -> solo actualiwo lo necesario

      /* setTimeout(()=>{

         this.store.dispatch({ type: 'UPDATE_ITEM', payload:selectedRoomTypeData  }) //now that the server  have the value, We update the model(store)
    },5000);
    */
  }
  
}
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../shared/appStore';
import {RoomType} from '../shared/roomType';

import { DayInfo } from '../shared/DayInfo';

const BASE_URL = 'http://localhost:3000/type-rooms/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class TypeOfRoomsService {
  roomTypes: Observable<Array<RoomType>>;


  constructor(private http: Http,private store: Store<AppStore>) {
    this.roomTypes = store.select('roomTypes'); // Bind an observable of our items to "ItemsService"
   // this.selectedRoomTypeData=store.select('selectedRoomTypeData');
  }

  loadData(){/*TODO, connect to database
        this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store.dispatch(action));*/

      let a=[{    id:5,name:"couple" 
                    },
                    {
                            id:6
                            ,name:"doble"
                        }];

      this.store.dispatch({ type: 'ADD_ROOM_TYPES',payload: a   })
  }
  

}
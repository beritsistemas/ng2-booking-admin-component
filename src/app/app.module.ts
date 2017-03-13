import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import {StoreModule} from '@ngrx/store';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';



import { CampoComponent } from './campo/campo.component';
import { DayFieldComponent } from './day-field/day-field.component';
import { MonthComponent } from './month/month.component';


import { RoomMonthComponent } from './room-month/room-month.component';
import { RoomCalendarComponent } from './room-calendar/room-calendar.component';
import { FirstComponent } from './first/first.component';


import { RoomTypeDataService } from './services/roomTypeData.service';

import { TypeOfRoomsService } from './services/typeOfRooms.service';


import {RoomTypeDataReducer} from './shared/stores/roomTypeData.store';

import {selectedRoomTypeDataReducer} from './shared/stores/selectedRoomTypeData.reducer';
import {RoomTypesReducer} from './shared/stores/roomTypes.reducer';



const routing = RouterModule.forRoot([
    { path: '',      component: FirstComponent },
    { path: 'about', component: AboutComponent },

]);


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

    CampoComponent,
    DayFieldComponent,
    MonthComponent,
    RoomMonthComponent,
    RoomCalendarComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    
    StoreModule.provideStore({roomTypeDatas:RoomTypeDataReducer
                              ,selectedRoomTypeData:selectedRoomTypeDataReducer
                              ,typeOfRooms:RoomTypesReducer}),
      StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  providers: [
    RoomTypeDataService
    ,TypeOfRoomsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }

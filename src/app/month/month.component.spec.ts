/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed ,fakeAsync,tick} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MonthComponent } from './month.component';
import { CampoComponent } from '../campo/campo.component';
import { DayFieldComponent } from '../day-field/day-field.component';

import { RoomTypeData } from '../shared/roomTypeData';

describe('MonthComponent', () => {
  let component: MonthComponent;
  let fixture: ComponentFixture<MonthComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthComponent,CampoComponent,DayFieldComponent ],imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //jasmine.clock().install();
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it("should define the calendar for may",fakeAsync(()=>{

  //Inject test values
   let values={id:5,yearMonth:"201705",dayInfos:[{date:"20170501",price:28,availability:3,min_nigths:1 },
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
{date:"20170531",price:55,availability:3,min_nigths:1 }]};
 component.yearmonth="201705";
 fixture.detectChanges();
  component.roomTypeData=values;
 // jasmine.clock().tick(10);
 tick(1000);
fixture.detectChanges();
  tick();  
  component.asignData()
  //  tick();  
    fixture.detectChanges();
let element=fixture.debugElement.query(By.css("#td_fila0101 .fc-day-number"));
console.log(element)
expect(element.nativeElement.textContent).toEqual("1");
element=fixture.debugElement.query(By.css("#td_fila0102 .fc-day-number"));
expect(element.nativeElement.textContent).toEqual("2");
})

);

it("should define the calendar for june",fakeAsync(()=>{
   let values={id:5,yearMonth:"201706",dayInfos:[{date:"20170601",price:28,availability:3,min_nigths:1 },
{date:"20170602",price:71,availability:3,min_nigths:1 },
{date:"20170603",price:12,availability:3,min_nigths:1 },
{date:"20170604",price:49,availability:3,min_nigths:1 },
{date:"20170605",price:89,availability:3,min_nigths:1 },
{date:"20170606",price:82,availability:3,min_nigths:1 },
{date:"20170607",price:98,availability:3,min_nigths:1 },
{date:"20170608",price:53,availability:3,min_nigths:1 },
{date:"20170609",price:83,availability:3,min_nigths:1 },
{date:"20170610",price:67,availability:3,min_nigths:1 },
{date:"20170611",price:51,availability:3,min_nigths:1 },
{date:"20170612",price:40,availability:3,min_nigths:1 },
{date:"20170613",price:83,availability:3,min_nigths:1 },
{date:"20170614",price:26,availability:3,min_nigths:1 },
{date:"20170615",price:89,availability:3,min_nigths:1 },
{date:"20170616",price:56,availability:3,min_nigths:1 },
{date:"20170617",price:59,availability:3,min_nigths:1 },
{date:"20170618",price:69,availability:3,min_nigths:1 },
{date:"20170619",price:25,availability:3,min_nigths:1 },
{date:"20170620",price:23,availability:3,min_nigths:1 },
{date:"20170621",price:69,availability:3,min_nigths:1 },
{date:"20170622",price:60,availability:3,min_nigths:1 },
{date:"20170623",price:57,availability:3,min_nigths:1 },
{date:"20170624",price:71,availability:3,min_nigths:1 },
{date:"20170625",price:64,availability:3,min_nigths:1 },
{date:"20170626",price:34,availability:3,min_nigths:1 },
{date:"20170627",price:70,availability:3,min_nigths:1 },
{date:"20170628",price:81,availability:3,min_nigths:1 },
{date:"20170629",price:16,availability:3,min_nigths:1 },
{date:"20170630",price:33,availability:3,min_nigths:1 },
{date:"20170631",price:55,availability:3,min_nigths:1 }]};
 component.yearmonth="201706";
 fixture.detectChanges();
  component.roomTypeData=values;
 // jasmine.clock().tick(10);
 tick(1000);
fixture.detectChanges();
  tick();  
  component.asignData()//tengo que volver q llamar ya que internamente se hace con un setTimeOut
  //  tick();  
    fixture.detectChanges();
let element=fixture.debugElement.query(By.css("#td_fila0104 .fc-day-number"));
console.log(element)
expect(element.nativeElement.textContent).toEqual("1");

 element=fixture.debugElement.query(By.css("#td_fila0105 .fc-day-number"));
expect(element.nativeElement.textContent).toEqual("2");
})

);
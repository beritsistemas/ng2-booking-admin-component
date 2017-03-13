import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import {DayInfo} from '../shared/dayInfo';

@Component({
  selector: 'app-campo',
  //templateUrl: './campo.component.html',
  template: `
  <div (click)="initEdit()"  [ngClass]="{serverWait: serverWait}" *ngIf="!editingMode" >
  <span class="title" [ngClass]="{title_inline: title_inline}">{{titulo}}</span>
  <div class="fieldeditingMode"   ><span *ngIf="isMoney">$</span>{{value}}</div>
  </div>
<input *ngIf="editingMode" [(ngModel)]="value" (focusout)="endEditing()"  (keyup.enter)="endEditing()" type="number" /> 

`,
  styleUrls: ['./campo.component.css']
})
export class CampoComponent implements OnInit {
 
  //If the user is editing the value
  editingMode:Boolean=false;

  @Input() titulo:Boolean=false;

  @Input() title_inline:Boolean=false;
    
  @Input() isMoney:Boolean=false;

  @Output() changeValue:EventEmitter<Number>=new EventEmitter<Number>();
    
  /**
   * If this component can be editable
   * 
   */
  @Input() editable:Boolean=true;  
  
 serverWait:Boolean=false;
  
  private _value:Number;

  @Input("value") 
  set value(val:Number){
    //console.log("antes "+this._value+"entro un nuevo valor",val);
  //  if(val!=this._value){

    //console.log("actualiwzo server wait");
      this._value=val;
    
      this.serverWait=false;
   // }
  }
  get value():Number{
    return this._value;
  }



    
  constructor() { }

  ngOnInit() {
  }
  initEdit(){
    if(!this.serverWait&&this.editable){
        this.editingMode=true;  
    }
      
  }


  endEditing(){
    this.editingMode=false
    this.serverWait=true;
   // this.dayInfo.value=this.value;
    this.changeValue.emit(this.value);
  }
  
}

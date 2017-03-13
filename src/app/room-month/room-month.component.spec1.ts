/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoomMonthComponent } from './room-month.component';

describe('RoomMonthComponent', () => {
  let component: RoomMonthComponent;
  let fixture: ComponentFixture<RoomMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

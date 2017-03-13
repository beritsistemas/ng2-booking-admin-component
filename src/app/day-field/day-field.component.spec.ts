/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampoComponent } from '../campo/campo.component';
import { DayFieldComponent } from './day-field.component';

describe('DayFieldComponent', () => {
  let component: DayFieldComponent;
  let fixture: ComponentFixture<DayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayFieldComponent,CampoComponent ],imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampoComponent } from './campo.component';

describe('CampoComponent', () => {
  let component: CampoComponent;
  let fixture: ComponentFixture<CampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoComponent ],imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoComponent);
    component = fixture.componentInstance;
    component.value=5
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

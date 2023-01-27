import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFormsPageRoutingModule } from './my-forms-routing.module';

import { MyFormsPage } from './my-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MyFormsPageRoutingModule
  ],
  declarations: [MyFormsPage]
})
export class MyFormsPageModule {}

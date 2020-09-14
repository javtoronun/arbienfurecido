import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaryPageRoutingModule } from './temary-routing.module';

import { TemaryPage } from './temary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaryPageRoutingModule
  ],
  declarations: [TemaryPage]
})
export class TemaryPageModule {}

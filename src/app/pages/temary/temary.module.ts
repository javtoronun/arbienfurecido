import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemaryPageRoutingModule } from './temary-routing.module';

import { TemaryPage } from './temary.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IntroduccionComponent } from './introduccion/introduccion.component';
import { Regla1Component } from './regla1/regla1.component';
import { Regla2Component } from './regla2/regla2.component';
import { Regla3Component } from './regla3/regla3.component';
import { Regla4Component } from './regla4/regla4.component';
import { Regla5Component } from './regla5/regla5.component';
import { Regla6Component } from './regla6/regla6.component';
import { Regla7Component } from './regla7/regla7.component';
import { Regla8Component } from './regla8/regla8.component';
import { Regla9Component } from './regla9/regla9.component';
import { Regla10Component } from './regla10/regla10.component';
import { Regla11Component } from './regla11/regla11.component';
import { Regla12Component } from './regla12/regla12.component';
import { Regla13Component } from './regla13/regla13.component';
import { Regla14Component } from './regla14/regla14.component';
import { Regla15Component } from './regla15/regla15.component';
import { Regla16Component } from './regla16/regla16.component';
import { Regla17Component } from './regla17/regla17.component';
import { CambiosComponent } from './cambios/cambios.component';
import { GlosarioComponent } from './glosario/glosario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemaryPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [
    TemaryPage,
    IntroduccionComponent,
    Regla1Component,
    Regla2Component,
    Regla3Component,
    Regla4Component,
    Regla5Component,
    Regla6Component,
    Regla7Component,
    Regla8Component,
    Regla9Component,
    Regla10Component,
    Regla11Component,
    Regla12Component,
    Regla13Component,
    Regla14Component,
    Regla15Component,
    Regla16Component,
    Regla17Component,
    CambiosComponent,
    GlosarioComponent
  ]
})
export class TemaryPageModule {}

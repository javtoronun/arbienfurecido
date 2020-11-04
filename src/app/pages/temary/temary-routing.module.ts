import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaryPage } from './temary.page';
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

const routes: Routes = [
  {
    path: '',
    component: TemaryPage,
    children: [
      {
        path: '',
        redirectTo: "introduccion",
        pathMatch: "full"
      },
      {
        path: "introduccion",
        component: IntroduccionComponent
      },
      {
        path: "regla1",
        component: Regla1Component
      },
      {
        path: "regla2",
        component: Regla2Component
      },
      {
        path: "regla3",
        component: Regla3Component
      },
      {
        path: "regla4",
        component: Regla4Component
      },
      {
        path: "regla5",
        component: Regla5Component
      },
      {
        path: "regla6",
        component: Regla6Component
      },
      {
        path: "regla7",
        component: Regla7Component
      },
      {
        path: "regla8",
        component: Regla8Component
      },
      {
        path: "regla9",
        component: Regla9Component
      },
      {
        path: "regla10",
        component: Regla10Component
      },
      {
        path: "regla11",
        component: Regla11Component
      },
      {
        path: "regla12",
        component: Regla12Component
      },
      {
        path: "regla13",
        component: Regla13Component
      },
      {
        path: "regla14",
        component: Regla14Component
      },
      {
        path: "regla15",
        component: Regla15Component
      },
      {
        path: "regla16",
        component: Regla16Component
      },
      {
        path: "regla17",
        component: Regla17Component
      },
      {
        path: "cambios",
        component: CambiosComponent
      },
      {
        path: "glosario",
        component: GlosarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaryPageRoutingModule {}

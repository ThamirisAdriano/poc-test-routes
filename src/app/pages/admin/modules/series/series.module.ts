import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    SeriesComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }

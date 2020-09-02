import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule, BaseChartDirective, ThemeService } from 'ng2-charts'


@NgModule({
  declarations: [
    IncrementadorComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  providers: [BaseChartDirective, ThemeService],
  exports: [
    IncrementadorComponent,
    DoughnutComponent
  ]
})
export class ComponentsModule { }

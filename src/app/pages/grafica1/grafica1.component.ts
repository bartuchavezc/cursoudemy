import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component implements OnInit {

  public labels1: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public chartData1: MultiDataSet = [[350, 450, 100],];

  public labels2: Label[] = ['Download', 'In-Store', 'Mail-Order'];
  public chartData2: MultiDataSet = [[199, 400, 200],];

  constructor() { }

  ngOnInit() {
  }

}

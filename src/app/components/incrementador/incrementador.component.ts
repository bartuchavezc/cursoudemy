import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('valor') progress: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${this.progress}%`;
  }

  changeValue(value: number) {

    if (this.progress >= 100 && value >= 0) {
      this.valorSalida.emit(100);
      return this.progress = 100;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.valorSalida.emit(0);
      return;
    }

    this.progress = this.progress + value;
    this.valorSalida.emit(this.progress);
  }

  onChange(value: number) {

    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }

    this.valorSalida.emit(this.progress);
  }


}

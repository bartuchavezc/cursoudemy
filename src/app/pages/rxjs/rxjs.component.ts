import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {


  intervalSubs: Subscription;


  constructor() {
    // this.retornaObs().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs:', valor),
    //   err => console.warn(err),
    //   () => console.info('Obs terminado'))


    this.intervalSubs = this.retornaIntervalo()
      .subscribe(console.log);

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  ngOnInit() {
  }

  retornaIntervalo(): Observable<number> {
    return interval(50)
      .pipe(
        // take(10), // toma 10 emisiones
        map(valor => valor + 1),
        filter(valor => valor % 2 === 0),
        // take(10), // toma 10 a partir del resultado del filter
      );
  }

  retornaObs(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {

      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i == 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i == 2) {
          i = 0;
          observer.error('i llego al valor de 2')
        }


      }, 1000)
    });

    return obs$;

  }

}

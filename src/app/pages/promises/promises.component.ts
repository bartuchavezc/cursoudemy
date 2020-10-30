import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);

    })

    // const promise = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola Mundo');
    //   }

    //   reject('Algo salio mal');

    // });

    // promise
    //   .then((result) => console.log(result))
    //   .catch(error => console.log('error en mi promesa', error));

    // console.log('fin del init');

  }

  getUsuarios() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(body => resolve(body.data))
    });
  }

}

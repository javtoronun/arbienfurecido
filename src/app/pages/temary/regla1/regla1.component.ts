import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regla1',
  templateUrl: './regla1.component.html',
  styleUrls: ['./regla1.component.scss'],
})
export class Regla1Component implements OnInit {

  pagina: number = 0;

  constructor() { }

  ngOnInit() {
    this.pagina = 0;
  }

}

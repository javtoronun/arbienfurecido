import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss'],
})
export class IntroduccionComponent implements OnInit {

  pagina: number = 0;

  constructor() { }

  ngOnInit() {
    this.pagina = 0;
  }

}

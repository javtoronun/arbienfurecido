import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.scss'],
})
export class GlosarioComponent implements OnInit {

  pagina: number = 0;

  constructor() { }

  ngOnInit() {}

}

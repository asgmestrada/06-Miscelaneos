import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <br>
  <app-clases></app-clases>
  <br>
  <p [appResaltado]="''"> Hola desde app.component </p>
  <br>
  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ],
})
export class HomeComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {
  console.log("1");
  }


}

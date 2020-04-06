import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute)
  {
    this.activateRouter.params.subscribe(parametros=>{
      console.log('Ruta Padres');
      console.log(parametros);

    });
  }

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ],
})
export class UsuarioNuevoComponent implements OnInit {

    constructor(private activateRouter: ActivatedRoute)
    {
      this.activateRouter.parent.params.subscribe(parametros=>{
        console.log('Ruta Hija: Nuevo Usuario');
        console.log(parametros);

      });
    }

  ngOnInit(): void {
  }

}

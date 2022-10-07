import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  listUsuario:any [] = [
    {
      
      nombre:'Meliza Gomez',
      cedula:'11227863',
      correo:'slymlz98@gmail.com',
      n_celular:314639984,
    },

    {
      nombre:'Catheryn Cabrera',
      cedula:'1234587',
      correo:'sfab@gmail.com',
      n_celular:3158758742,
      
    }, 

  ]
  constructor() { }

  ngOnInit(): void {
  }

}

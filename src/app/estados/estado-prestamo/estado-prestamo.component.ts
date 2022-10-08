import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'src/app/interfaces/prestamo';


@Component({
  selector: 'app-estado-prestamo',
  templateUrl: './estado-prestamo.component.html',
  styleUrls: ['./estado-prestamo.component.css']
})
export class EstadoPrestamoComponent implements OnInit {

  listPrestamo: Prestamo[] = [
    {
      nombreLibro: 'Quijote',
      fechaPrestamo: new Date(),
      disponibilidad: 'No',
      duracionPrestamo: ' 1 semana',
      persoEmpres: 'Ivan Campino'
    },
    {
      nombreLibro: 'Cien años de soledad',
      fechaPrestamo: new Date(),
      disponibilidad: 'No',
      duracionPrestamo: ' 2 semanas',
      persoEmpres: 'Meliza Gomez'
    },
    {
      nombreLibro: 'El principito',
      fechaPrestamo: new Date(),
      disponibilidad: 'No',
      duracionPrestamo: ' 2 semanas',
      persoEmpres: 'David Ñañez'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

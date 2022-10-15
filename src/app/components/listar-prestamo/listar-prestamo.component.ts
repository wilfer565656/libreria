import { Component, OnInit } from '@angular/core';
import { prestamo } from '../interfaces/prestamo';

@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {

  listprestamos:prestamo[] = [

    { 
    id:'wil123',
    isbn:'000011',
    fecha_prestamo:new Date(),
    fecha_devolucion:new Date()
     },
   
     { 
      id:'wil123',
      isbn:'000011',
      fecha_prestamo:new Date(),
      fecha_devolucion:new Date()
      },
      { 
        id:'rx23',
        isbn:'000011',
        fecha_prestamo:new Date(),
        fecha_devolucion:new Date()
      },
      { 
        id:'rx23',
        isbn:'000011',
        fecha_prestamo:new Date(),
        fecha_devolucion:new Date()
       },
       { 
        id:'wil123',
        isbn:'000011',
        fecha_prestamo:new Date(),
        fecha_devolucion:new Date()
         },
         { 
          id:'rx23',
          isbn:'000011',
          fecha_prestamo:new Date(),
          fecha_devolucion:new Date()
           }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

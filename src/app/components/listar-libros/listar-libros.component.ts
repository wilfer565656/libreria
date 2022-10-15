import { Component, OnInit } from '@angular/core';
import { listar_libros } from '../interfaces/libros_fisicos';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  listLibros:listar_libros[] = [
    { 
    isbn:'000001',
    titulo:'libro 1',
    autor:'auror 1',
    editorial:'angular ',
    AnioPublicacion: new Date()
   },
   { 
    isbn:'000010',
    titulo:'libro 2',
    autor:'auror 2',
    editorial:'css',
    AnioPublicacion: new Date()
   },
   { 
    isbn:'000011',
    titulo:'libro 3',
    autor:'auror 3',
    editorial:'java',
    AnioPublicacion: new Date()
   },
   { 
    isbn:'000100',
    titulo:'libro 4',
    autor:'auror 4',
    editorial:'python ',
    AnioPublicacion: new Date()
   }
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}




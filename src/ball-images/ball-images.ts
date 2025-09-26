import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ball-images',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './ball-images.html',
  styleUrls: ['./ball-images.css']
})
export class BallImages implements OnInit {

  elementos: { titulo: string, descripcion: string }[] = [];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.elementos = [
      { titulo: 'Columna 1', descripcion: 'Hola' },
      { titulo: 'Columna 2', descripcion: 'Hola' },
      { titulo: 'Columna 3', descripcion: 'Adios' },
      { titulo: 'Columna 4', descripcion: 'Miss es la mejor' },
      { titulo: 'Columna 5', descripcion: 'Adios' }
    ];
  }
}


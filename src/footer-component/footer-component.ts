import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer-component',
  imports: [CommonModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css'
})
export class FooterComponent {
  elements: Footer[]=[
    {id:1,titulo:"Primer cuadro",parrafo:"Este es el primer cuadro que se crea de manera iteraticva"},
    {id:2, titulo:"Segundo Cuadro",parrafo:"Segundo cuadro de manera interactiva"}
  ]
}

export interface Footer{
  id: number;
  titulo: String;
  parrafo: String;
}
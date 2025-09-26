import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  paths: NavbarC[] =[
    {name: "Inicio", pathi: "/home"},
    {name: "Medio", pathi: "/medio"},
    {name: "Final", pathi: "/fin"}
  ]
}
export interface NavbarC{
  name:String;
  pathi:String;
}


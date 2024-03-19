import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  modelo: cineDTO = {nombre: "Sambil"}; 

  ngOnInit(): void {
  }
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }

}

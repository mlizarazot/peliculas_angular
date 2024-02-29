import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../generos';
//import { group } from 'console';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent{
modelo: any;

  constructor(private router: Router) { }
 
  guardarCambios(genero: generoCreacionDTO){
    console.log(genero)
    this.router.navigate(['/generos'])

  }
}

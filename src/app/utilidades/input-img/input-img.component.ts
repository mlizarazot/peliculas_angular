
/*import { Component, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})


export class InputImgComponent implements OnInit {
  
  constructor() { }

  imagenBase64!: string;

  @Input()
  urlImagenActual!: string;

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  
  ngOnInit(): void {
    
  
  }
  change(event){
    
    
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string)=> this.imagenBase64 = value)
      .catch(error => console.log(error));
      this.archivoSeleccionado.emit(file)
    }
  }
}*/
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})

export class InputImgComponent implements OnInit {
  
  constructor() { }

  imagenBase64: string=''; // Asigna un valor por defecto para evitar 'undefined'

  

  @Input()
  urlImagenActual: string | undefined;
  
  //this.urlImagenActual = undefined
  //urlImagenActual: string=''; // Asigna un valor por defecto para evitar 'undefined'

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
    
  
  }
  
  

  change(event): void {
    if(event.target.files.length > 0){
      const file: File = event.target.files[0];
      this.convertirAbase64(file);
      this.archivoSeleccionado.emit(file);
      this.urlImagenActual = undefined; 
    }
    
  }

  private convertirAbase64(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagenBase64 = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

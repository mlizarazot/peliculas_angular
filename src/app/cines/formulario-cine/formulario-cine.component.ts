import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {
  value: any;

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [ 
      '',
      {
        validator: [ Validators.required],
      },
      ],
    });
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);

  }

}

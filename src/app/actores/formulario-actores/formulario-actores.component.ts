import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
archivoSeleccionado($event: File) {
throw new Error('Method not implemented.');
}
//submit: any;
  
  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo!: actorDTO;

  @Output()
  submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', 
      
      {
        validators: [Validators.required],

      },
    ],
      fechaNacimiento: ''  
    });
    if(this.modelo !==undefined){
      this.form.patchValue(this.modelo)
    }
  }
  onSubmit(){
    this.submit.emit(this.form.value);

  }

}

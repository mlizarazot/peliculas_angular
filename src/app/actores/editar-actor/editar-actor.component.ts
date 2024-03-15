import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://tse2.mm.bing.net/th?id=OIP.5XwmTpi5rrD2vSkiiTv0ZwHaE7&pid=Api&P=0&h=180'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }
  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
    
  }

}

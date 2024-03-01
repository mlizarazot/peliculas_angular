import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private location: Location,
    private activateRoute: ActivatedRoute) { }

  form!: FormGroup;

  generos = [
        {id: 1, nombre: 'Drama'},
        {id: 2, nombre: 'Acción'}, 
        {id: 3, nombre: 'Comedía'},
        {id: 4, nombre: 'Suspenso'},
        {id: 5, nombre: 'Infantil'}
      ];

      peliculas = [ 
        {titulo: 'Spider-Man: Far From Home', enCines: false, proximosEstrenos: true, generos:[1,2], poster: 'https://tse1.mm.bing.net/th?id=OIP.i1aIGenvmekZMMrQKu1zywHaLH&pid=Api&P=0&h=180'},
        {titulo: 'Moana', enCines:true, proximosEstrenos: false, generos:[5, 3], poster: 'https://tse1.mm.bing.net/th?id=OIP.8oecO5S90ZbpE9rYQbTBUAHaJh&pid=Api&P=0&h=180'},
        {titulo: 'Inception', enCines: false, proximosEstrenos: false, generos:[4,2], poster: 'https://tse4.mm.bing.net/th?id=OIP.13oim15S0HB_WVU2JUk_sAHaKy&pid=Api&P=0&h=180'},
      ]

  peliculasOriginal = this.peliculas;    

  formularioOriginal = {
    titulo:'',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  ngOnInit(): void {
    this.form=this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  private leerValoresURL(){
    this.activateRoute.queryParams.subscribe((params)=> {
      var objeto: any = {};
      if (params.titulo){
        objeto.titulo = params.titulo;

      }
      if (params.generoId){
        objeto.generoId = Number(params.generoId); 
      }
      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }
      if (params.enCines){
        objeto.enCines = params.enCines;
      }
      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaEnURL(){
    var queryStrings = [''];

    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generoId !='0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
      
    }
    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
  }
  buscarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
   
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
     this.peliculasEnCines = [ {
      titulo: 'Spider-man',
      fechaLanzamiento: new Date(),
      precio: 5000,
      poster: 'https://tse1.mm.bing.net/th?id=OIP.e9zzJWNdizCxC0w1IW5UFwHaNE&pid=Api&rs=1&c=1&qlt=95&w=70&h=124'
    },
    {
      titulo: 'super man gir',
      fechaLanzamiento: new Date(),
      precio: 65000,
      poster: 'https://tse4.mm.bing.net/th?id=OIP.F9OdecDe6j7FyTXDXhRHcAHaLE&pid=Api&P=0&h=180'
    }];
  }
  peliculasEnCines;
  peliculasProximosEstrenos = []; 

}

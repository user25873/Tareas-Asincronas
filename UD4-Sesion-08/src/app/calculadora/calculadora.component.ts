import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "CALCULADORA"
  botonTexto = "CALCULAR"
  numeros = ["Number 1:10", "Number 2:20"]
  textoInput01 = "Ingresa el primer número"
  textoInput02 = "Ingresa el segundo número"
  textoConfirmacion = "El número que ingresaste es:"
  numero!: number
}

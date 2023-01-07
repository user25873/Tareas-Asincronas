import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  operacion: string = 'unselected';

  onSumar(): void {
    this.resultado = this.num1 + this.num2;
  }
  onRestar(): void {
    this.resultado = this.num1 - this.num2;
  }
  onMultiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }
  onDividir(): void {
    this.resultado = this.num1 / this.num2;
  }

  calcularOperacion(): number {
    if (this.operacion === 'sumar') {
      this.onSumar();
      return this.resultado;
    } else if (this.operacion === 'restar') {
      this.onRestar();
      return this.resultado;
    } else if (this.operacion === 'multiplicar') {
      this.onMultiplicar();
      return this.resultado;
    } else if (this.operacion === 'dividir') {
      this.onDividir();
      return this.resultado;
    }

    return 0;
  }
}

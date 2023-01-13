import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color : string= '#06B6D4';

  valorInput:any = 0;
  numeroUno:any=0;
  numeroDos:any=0;
  operator:any=null;
  valueMemo:any=0;

  buton = ($event: any)=>{
    const value = $event.target.innerHTML;
    this.filterAction(value)
  }
  filterAction = (value: any)=>{
    value == "0" ? this.addNumberInput("0") : null;
    value == "1" ? this.addNumberInput("1") : null;
    value == "2" ? this.addNumberInput("2") : null;
    value == "3" ? this.addNumberInput("3") : null;
    value == "4" ? this.addNumberInput("4") : null;
    value == "5" ? this.addNumberInput("5") : null;
    value == "6" ? this.addNumberInput("6") : null;
    value == "7" ? this.addNumberInput("7") : null;
    value == "8" ? this.addNumberInput("8") : null;
    value == "9" ? this.addNumberInput("9") : null;
    value == "." ? this.addNumberInput(".") : null;

    value == "+" ? this.addOperatorInput("+") : null;
    value == "x" ? this.addOperatorInput("x") : null;
    value == "÷" ? this.addOperatorInput("÷") : null;
    value == "-" ? this.addOperatorInput("-") : null;
    value == "✓" ? this.calcular() : null;
    value == "C" ? this.resetear() : null;
    value == "⌫" ? this.eliminar():null;

  }

  addNumberInput=(value: any)=>{
    const InputValue = this.valorInput.toString();
    if (InputValue === '0' && value !== ".") {
      this.valorInput = value;
      return;
    }
    this.valorInput = InputValue + value;
    this.numeroUno = this.valorInput;
  }
  addOperatorInput=(value:any)=>{
    if (this.valorInput.length===1) {
      this.numeroUno = this.valorInput;
      this.valorInput = this.numeroUno + " " + value + " "
    }else{
      let ultimo = this.numeroUno.charAt(this.numeroUno.length-1);
      let ultimoOperador = this.numeroUno.charAt(this.numeroUno.length-2);
      if (ultimo === "." ) {
        this.valorInput = this.numeroUno +"0"+ " " +value + " "
      }
      if (ultimoOperador === "+" || ultimoOperador === "-" || ultimoOperador === "x" || ultimoOperador === "÷") {
        this.valorInput = this.valorInput - ultimoOperador
      }
      this.valorInput = this.numeroUno + " " + value + " "
    }

    this.addNumberInput("")
  }

  calcular=()=>{
    let arrCalcular = this.valorInput.split(" ")
    this.setOperador(arrCalcular[0],arrCalcular[1],arrCalcular[2])
  }
  setOperador=(numero1:any,operator: any,numero2:any)=>{
    if (operator=="+") {
      let total = parseFloat(numero1)+parseFloat(numero2);
      this.valorInput = total.toString()
      return
    }
    if (operator=="-") {
      let total = parseFloat(numero1)-parseFloat(numero2);
      this.valorInput=total.toString()
      return
    }
    if (operator=="x") {
      let total = parseFloat(numero1)*parseFloat(numero2);
      this.valorInput=total.toString()
      return
    }
    if (operator=="÷") {
      let total = parseFloat(numero1)/parseFloat(numero2);
      this.valorInput=total.toString()
      return
    }


  }

  resetear=()=>{
    this.valorInput="0"
  }
  eliminar=()=>{
    let eliminarUltimo = this.valorInput.charAt(this.valorInput.length-1);
    if (eliminarUltimo === " ") {
      this.valorInput = this.valorInput.slice(0, this.valorInput.length - 2);
      return
    }
    this.valorInput = this.valorInput.slice(0, this.valorInput.length - 1);
    if (this.valorInput==="") {
      this.valorInput="0";
    }
  }


}




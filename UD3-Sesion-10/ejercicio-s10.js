class Alumno {
    constructor (codigo, nombre, nota1, nota2, nota3, nota4) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
    promedio = function() {
        return this.nota1 * 0.15 + this.nota2 * 0.20 + this.nota3 * 0.25 + this.nota4 * 0.40
    }
    condicion = function() {
        let prom = this.promedio();
        if (prom >= 12) {
            console.log(`El alumno ${this.nombre} está Aprobado`)
        } else {
            console.log(`El alumno ${this.nombre} está Desaprobado`)
        }
    }
    obsequio = function() {
        let obs = this.promedio();
        if (obs > 17) {
            console.log("Se obsequia una Mochila")
        } else {
            console.log("No se obsequia una Mochila")
        }
    }
}

let nuevoAlumno = new Alumno("123ABC", "Diego", 16, 13, 14, 15)

console.log(nuevoAlumno.promedio())
nuevoAlumno.condicion()
nuevoAlumno.obsequio()
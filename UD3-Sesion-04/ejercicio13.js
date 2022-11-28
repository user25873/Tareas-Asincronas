//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.


let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]

function filtrarPorMes(mes) {
    let nuevoMes = mes - 1
    let filtradosMes = users.filter(fechaMes => new Date(fechaMes["created_at"]).getMonth() === nuevoMes)
    return filtradosMes
}

function filtrarPorAño(año) {
    let filtradosAño = users.filter(fechaAño => new Date(fechaAño["created_at"]).getFullYear() === año)
    return filtradosAño
}
let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
 

//1. Ordernar los pokemons por base_damage de menor a mayor.

pokemons.sort((a,b) => a.base_damage - b.base_damage)

console.log(pokemons)


//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

function sortPokemons(argument){
    let validInput = ["type", "base_damage", "base_hp", "speed"]

    if (validInput.includes(argument)){
        let result = argument === "type" ? (pokemons.sort((a,b) => a[argument].localeCompare(b[argument]))) : (pokemons.sort((a,b) => a[argument] - b[argument]))
        console.log(result)
    } else {
        console.log("Debes ingresar un argumento valido")
    }
}


//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.

function filterPokemons(argument) {
    let filteredPokemons = pokemons.filter(pokemon => pokemon.type === argument)
    let result = filteredPokemons.length === 0 ? "Tipo de pokemon no encontrado" : filteredPokemons
    console.log(result)
}


//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

let pokemonMaster = {
    id: 18,
    name: "Lucario",
    created_date: "20 de noviembre",
    pokemon: []
}
 

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

function addRandomPokemon() {
    const aleatorio = Math.floor(Math.random()*pokemons.length)
    pokemonMaster.pokemon.push(pokemons[aleatorio])
    console.log(pokemonMaster)
}


//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

function addAtributes() {
    for (let i = 0; i < pokemons.length; i++) {
        pokemons[i]["min_damage"] = Math.floor(Math.random() * (2 - 1 + 1) + 1)
        pokemons[i]["max_damage"] = Math.floor(Math.random() * (5 - 3 + 1) + 3)
    }

    console.log(pokemons)
}
 

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 
function setDamage(index) {
    if (index < pokemons.length) {
        addAtributes()
        let selectedPokemon = pokemons[index]
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random() * (selectedPokemon.max_damage - 1 + selectedPokemon.min_damage) + selectedPokemon.min_damage)

        console.log(total_damage)
    } else {
        console.log(`Please enter a number not greater than ${pokemons.length - 1}`)
    }
}


//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

const root = document.getElementById("root")
root.textContent = "Hola Mundo"
console.log(root)
 

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const tablaPokemon = document.getElementById("tablapokemon")
const table = document.createElement("table")
var tablBody = document.createElement("tbody")

for (let i=0; i < pokemons.length; i++) {
    const tr = document.createElement("tr")
    tablaPokemon.append(tr)

    for (const prop in pokemons[i]) {
        var celda = document.createElement("td")
        var textoCelda = document.createTextNode(pokemons[i][prop])
        celda.appendChild(textoCelda)
        tr.appendChild(celda)
    }
}


const getUserById = (id) => {
  fetch(`http://localhost:9000/api/users/${id}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => console.log(datos));
};

getUserById("639c017a99bc263d6d385579");

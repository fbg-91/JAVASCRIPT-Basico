let compra = ["Arroz", "Leche", "Huevos", "Atún", "Pollo"];

compra.push("Aceite de Girasol");

compra.pop();

const films = [{
    titulo: "El señor de los anillos. La comunidad del anillo",
    director: "Peter Jackson",
    fecha: new Date(2001, 11, 19)
},
{
    titulo: "Doctor Strange en el multiverso de la locura",
    director: "Sam Raimi",
    fecha: new Date(2022, 4, 6)
},
{
    titulo: "Tarzán",
    director: "Kevin Lima",
    fecha: new Date(1999, 10, 26)
}];

const newFilms = films.filter(p => p.fecha > new Date(2010, 0, 1));

const directores = films.map(p => p.director);

const titulos = films.map(p => p.titulo);

const newLista = directores.concat(titulos);

const newLista2 = [...directores, ...titulos];
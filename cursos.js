let cursos =
[
{
	// primer curso
	id : 0,
	nombre : 'Matemáticas Básicas',
	duracion : 72,
	valor : 0
},

{	
	//segundo curso
	id : 1,
	nombre : 'Lógica de Programación',
	duracion : 108,
	valor : 280000
},

{
	// tercer curso
	id : 2,
	nombre : 'Inglés I',
	duracion : 60,
	valor : 150000
}

]

let mostrarClases = clases => {
	var size = cursos.length;
	var i = 0;
	var interval = setInterval(function() {
		console.log(cursos[i].nombre + " con ID " + cursos[i].id + 
			", tiene una duración de " + cursos[i].duracion + 
			" horas y un valor de " + cursos[i].valor);
		i++;
		if (i >= size) clearInterval(interval);
	}, 2000);
}

module.exports = 
{
	cursos,
	mostrarClases
};


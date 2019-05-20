const opciones = {
	id : {
		alias : 'i',
		demand : true
	},

	nombre : {
		alias : 'n',
		demand : true
	},

	cedula : {
		alias : 'c',
		demand : true
	}
}

const argv = require('yargs')
	.command('insc', 'Inscribir una materia por ID', opciones)
	.argv
const {cursos, mostrarClases} = require("./cursos")
const fs = require('fs')

if (argv.n && argv.c){
	var found = cursos.find(function(element) {
		return element.id == argv.i;
	});

	if (found) {
		texto = 'El nombre del estudiante es ' + argv.n + '\n' +
				' con cédula '  + argv.c + ' se ha matriculado en el curso ' + '\n' +
				found.nombre + ' con una duración de ' + found.duracion + ' horas y un valor de ' + 
				found.valor; 

		fs.writeFile('archivo.txt', texto, (err) => {
			if (err) throw (err);
			console.log('se ha creado el archivo');
		});
	}

	else {
		console.log('No se ha encontrado un curso con este ID');
		mostrarClases(cursos);
	}

}
else {
	mostrarClases(cursos);
}
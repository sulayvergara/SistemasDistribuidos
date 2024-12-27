
const storage = require('./storage')

function insertar_ciudad( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.nombre ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_ciudad( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

function actualizar_ciudad(dato) {
    return new Promise((resolve, reject) => {
        if (!dato._id ||!dato.nombre || !dato.pais) {
            reject('Los datos se encuentran incompletos.');
        } else {
            let ciudad = {
                _id: dato._id,
                nombre: dato.nombre,
                pais: dato.pais
            };
            console.log(ciudad);
            resolve(storage.actualizar(ciudad));
        }
    });
}

function eliminar_ciudad(dato) {
    return new Promise((resolve, reject) => {
        if (!dato.nombre) {
            reject('Los datos se encuentran incompletos.');
        } else {
            resolve(storage.eliminar(dato));
        }
    });
}

module.exports = {
    insertar_ciudad,
    obtener_ciudad,
    actualizar_ciudad,
    eliminar_ciudad
}
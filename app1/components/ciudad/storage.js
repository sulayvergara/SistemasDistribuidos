const model = require('./model')

async function insertar_ciudad(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_ciudad(dato) {
        let mi_filtro = {}
     
        if (dato.nombre != null) {
           mi_filtro = { nombre: dato.nombre }
        }
   
        const data = await model.find( mi_filtro )
           .populate('pais')
           .exec( )

        let ciudades = []
        for (objeto of data) {
            let ciudad = {
                ciudad_id: objeto._id,
                ciudad_nombre: objeto.nombre,
                pais_nombre: objeto.pais.nombre
            }
            ciudades.push( ciudad )
        }
        return ciudades
}

async function actualizar_ciudad(dato) {
    const nombre = await model.findOne( {nombre:dato.nombre} )
    nombre._id = dato._id
    nombre.pais_nombre = dato.pais_nombre

    const resultado = ciudad.save()
    return resultado
}

async function eliminar_ciudad(dato) {
    const resultado = await model.deleteOne( {nombre: dato.nombre} )
    return resultado
}

module.exports = {
    insertar:insertar_ciudad,
    obtener:obtener_ciudad,
    actualizar:actualizar_ciudad,
    eliminar:eliminar_ciudad
}
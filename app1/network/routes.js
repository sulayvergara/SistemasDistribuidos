const usuario = require('../components/ciudad/interface')

const routes = function( server ) {
    server.use('/usuario', usuario)
}

module.exports = routes
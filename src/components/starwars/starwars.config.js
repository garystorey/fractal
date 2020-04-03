const swapi = require('swapi-node');

const res = swapi.getPerson(1)

module.exports = {
    context : {
        user: res
    }
};
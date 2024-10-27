const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 }); // Cache de 1 hora
module.exports = cache;
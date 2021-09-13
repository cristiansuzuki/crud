const mongoose = require("mongoose");

// Conexão do banco
mongoose.connect("mongodb://localhost/crud");
mongoose.Promise = global.Promise;

console.log("Database connected");

module.exports = mongoose;

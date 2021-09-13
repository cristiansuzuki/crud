const User = require("../models/user");

// Cria o usuário
const userCreate = async (body) => {
  return User.create(body);
};

module.exports = { userCreate };

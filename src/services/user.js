const User = require("../models/user");

const getUsers = async (id) => {
  // Verifica se tem ID para voltar dados de todos os usuários ou (caso tenha ID) somente de um
  if (id) return User.findById(id);

  return User.find();
};

const deleteUser = async (id) => {
  // Verifica o ID do usuário para ser deletado
  if (!id) throw new Error("ID é obrigatório");

  return User.findByIdAndDelete(id);
};

const updateUser = async (params) => {
  // Verifica o ID do usuário para ser atualizado

  const { id, address, name } = params;

  // Verifica se tem Nome ou Endereço
  if (!(address || name)) throw new Error("Endereço ou Nome é obrigatório");

  return User.findByIdAndUpdate(id, { ...params });
};

module.exports = { getUsers, deleteUser, updateUser };

const express = require("express");
const UserService = require("../services/user");

const router = express.Router();

// Rota para ver os usuários cadastrados
router.get("/users/:id?", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserService.getUsers(id);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).send("Erro ao exibir usuários");
  }
});

// Rota para deletar usuário
router.delete("/users/:id", async (req, res) => {
  try {
    await UserService.deleteUser(req.params.id);
    return res.status(200).send("Usuário deletado com sucesso");
  } catch (err) {
    return res.status(400).send("Erro ao deletar usuário");
  }
});

// Rota para alterar dados do usuário
router.put("/users/:id", async (req, res) => {
  try {
    const { body, params } = req;
    await UserService.updateUser({
      ...body,
      id: params.id,
    });
    return res.status(200).send("usuário alterado com sucesso");
  } catch (err) {
    return res.status(400).send("Erro ao atualizar usuário");
  }
});

module.exports = (app) => app.use(router);

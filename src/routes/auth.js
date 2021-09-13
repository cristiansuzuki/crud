const express = require("express");
const AuthService = require("../services/auth");
const User = require("../models/user");

const router = express.Router();

// Rota para cadastrar usuário
router.post("/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se o email já existe
    if (await User.findOne({ email })) {
      return res.status(400).send("Email já cadastrado");
    }

    // Validação do email e password
    const userValidate = await User.findOne();
    userValidate &&
      (await userValidate.validateEmailAndPassword(email, password));

    const user = await AuthService.userCreate(req.body);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send("Email ou senha inválidos");
  }
});

module.exports = (app) => app.use(router);

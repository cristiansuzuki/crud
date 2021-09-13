# CRUD de usuário

### Sobre
CRUD desenvolvido em Node, utilizando Express e MongoDB. Realiza de forma simples as funções necessárias, mas também envolve alguns adicionais, como validação de email e senha e verificação de duplicação de Email no banco.

## Instale as dependencias 

```bash
yarn
```

### Rode o sistema

```bash
yarn start
```

ou


```bash
yarn dev
```

## Acesse os endpoints

### Cadastrar usuário - método POST

```bash
localhost:3000/auth/register
```
Deve ser passado os paramêtros: name, email, address, password.
<p>Devido ao regex que está na Model, o email deve ser válido (conter @ / .com por exemplo) e a senha deve ter 8 caractéres, uma letra maiúscula, uma minúscula e um número.</p>

### Visualizar usuários - método GET

```bash
localhost:3000/users
```

Caso queira ver um usuário específico, adicionar "/id" após o endpoint

### Deletar usuário - método DELETE

```bash
localhost:3000/users/id
```

### Atualizar dados do usuário - método PUT

```bash
localhost:3000/users/id
```

Passar name e address no body, que são os dados que podem ser alterados.

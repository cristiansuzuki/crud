const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

console.log(`Rodando na porta ${3000}`);

process
  .on("SIGTERM", (signal) => {
    const shutdownTimeout = 25 * 1000;
    console.log(
      `[shutdown] shutting down in ${shutdownTimeout}ms | signal: ${signal}`
    );

    setTimeout(() => {
      console.log(`waited ${shutdownTimeout}ms, exiting.`);
      process.exit(0);
    }, shutdownTimeout);
  })
  .on("SIGINT", (signal) => {
    const shutdownTimeout = 25 * 1000;
    console.log(
      `[shutdown] shutting down in ${shutdownTimeout}ms | signal: ${signal}`
    );

    setTimeout(() => {
      console.log(`waited ${shutdownTimeout}ms, exiting.`);
      process.exit(0);
    }, shutdownTimeout);
  });

app.listen(3000);

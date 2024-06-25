const app = require("./app/app");

require('dotenv').config({path: '.env'});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
});
const express = require('express');
const server = express();

//Query paramns =? nome=felipe=27
server.get("/hello", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    return res.json({
        title: "Hello Word",
        mensagem: `Olá ${nome}`,
        idade: idade
    })
});

server.get("/hello/:nome", (req, res) => {
    const nome = req.params.nome;
    
    return res.json({
        title: "Teste",
        mensagem: `Olá ${nome}`,
    })
});

server.listen(3000);


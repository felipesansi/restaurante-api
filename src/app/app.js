const express = require("express");
const cors = require("cors");

const routes = require("./routes/routes");
class App {

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded({extended: true}));
    }

    routes() {
        this.server.use('/api', routes);
    }
}

module.exports = new App().server;
const db = require("../database/db");

module.exports = {
    getPratos: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM pratos", (error, results) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve(results);
            }) 
        });
    },

    createNewPrato: (PratoNome, PratoDescricao, PratoValorUnit, Ativa) =>{
        return new Promise ((resolve, reject) =>{
            db.query(
                "INSERT INTO pratos (PratoNome, PratoDescricao, PratoValorUnit, Ativa) VALUE (?,?,?,?)",
                [PratoNome, PratoDescricao, PratoValorUnit, Ativa],
                (error, results) =>{
                    if (error){
                        reject(error);
                        return;
                    }
                    resolve(results.insertId);
                }
            )

        });

    },

    updatePrato: (PratoId, PratoNome, PratoDescricao, PratoValorUnit, Ativa ) => {
        return new Promise((resolve, reject) => {

            db.query(
                "UPDATE pratos SET PratoNome = ?, PratoDescricao = ?, PratoValorUnit = ?, Ativa = ? WHERE PratoId = ?", 
                [PratoNome, PratoDescricao, PratoValorUnit, Ativa, PratoId], 
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results.affectedRows > 0);
                }
            )
        })
    },
    
    
    deletePrato: (PratoId) => {
        return new Promise((resolve, reject) => {
            db.query(
                "DELETE FROM pratos WHERE PratoId = ?",
                [PratoId],
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results.affectedRows > 0);
                }
            );
        });
    },
}
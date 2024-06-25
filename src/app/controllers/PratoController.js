const PratoService = require("../services/PratoService");

class PratoController {
    //Listar dos Pratos
    async index(req, res) {
        let data = { error: "", result: [] };

        data.result = await PratoService.getPratos();
        
        res.json(data);   
    }

    async create(req, res) {
        let data = { error: "", result: [] };

        let PratoNome = req.body.PratoNome;
        let PratoDescricao = req.body.PratoDescricao;
        let PratoValorUnit = req.body.PratoValorUnit;
        let Ativa = req.body.Ativa;

        let id = await PratoService.createNewPrato(PratoNome, PratoDescricao, PratoValorUnit, Ativa)

        data.result ={
            id: id,
            PratoNome,
            PratoDescricao,
            PratoValorUnit,
            Ativa

        }

        res.status(201).json(data);

    }

    async show(req, res) {
        let data = { error: "", result: [] };

        data.result = "";
        
        res.json(data);   
    }

    async update(req, res) {
        let data = { error: "", result: {} };

        let PratoId = req.params.id;

        let PratoNome = req.body.PratoNome;
        let PratoDescricao = req.body.PratoDescricao;
        let PratoValorUnit = req.body.PratoValorUnit;
        let Ativa = req.body.Ativa;
    
        let atualizou = await PratoService.updatePrato(PratoId, PratoNome, PratoDescricao, PratoValorUnit, Ativa )
       
        if (!atualizou){
            data.error = "Erro na atualização";
            res.status(500).json(data);
            return;
        }

        data.result = {
            PratoId,
            PratoNome,
            PratoDescricao,
            PratoValorUnit,
            Ativa
        }

        res.status(200).json(data);
    }
    
    async delete(req, res) {
        let data = { error: "", result: {} };
    
        let PratoId = req.params.id;
    
        let excluiu = await PratoService.deletePrato(PratoId);
    
        if (!excluiu) {
            data.error = "Erro na exclusão";
            res.status(500).json(data);
            return;
        }
    
        data.result = { message: "Prato excluído com sucesso" };
    
        res.status(200).json(data);
    }
}

module.exports = new PratoController;
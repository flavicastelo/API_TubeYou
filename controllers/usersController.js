const {Users: UsersModel} = require("../models/Users");

const usersController = {
    //req: requisicao
    //res: result
    create:  async(req, res) =>  {
        try{
            const users = {
                name: req.body.name,
                channel: req.body.channel,
                email: req.body.email,
                password: req.body.password,
                videos: req.body.videos,
            };

            if(!users.name){
                return res.status(422).json({msg: 'Nome obrigatório!'});
            }
            if(!users.channel){
                return res.status(422).json({msg: 'Nome do Canal obrigatório!'});
            }
            if(!users.email){
                return res.status(422).json({msg: 'E-mail obrigatório!'});
            }
            if(!users.password){
                return res.status(422).json({msg: 'Senha obrigatório!'});
            }
            const response = await UsersModel.create(users);
            res.status(201).json({response, msg: "Usuário criado com sucesso!"});
        }catch (error) {
            console.log(`Erro Controller: ${error}`);
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await UsersModel.find();
            res.json(users);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const users = await UsersModel.findById(id);

            if (!users) {
                res.status(404).json({ msg: "Usuário não encontrado!" });
                return;
            }

            res.json(users);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const users = await UsersModel.findById(id);

            if (!users) {
                res.status(404).json({ msg: "Usuário não encontrado!" });
                return;
            }

            const deletedUsers = await UsersModel.findByIdAndDelete(id);
            res.status(200).json({deletedUsers, msg: "Usuário excluído com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const users = {
            name: req.body.name,
            channel: req.body.channel,
            email: req.body.email,
            password: req.body.password,
            videos: req.body.videos,
        };

        const updateUsers = await UsersModel.findByIdAndUpdate(id, users);
        if (!updateUsers) {
            res.status(404).json({ msg: "Usuário não encontrado!" });
            return;
        }
        res.status(200).json({users, msg: "Usuário editado com sucesso!"});

    }
};

module.exports = usersController;

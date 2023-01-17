const {User: UserModel, User} = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    //req: requisicao
    //res: result
    create:  async(req, res) =>  {
        try{
            const { name, channel, email, password, videos} = req.body;

            if(!name){
                return res.status(422).json({msg: 'Nome obrigatório!'});
            }
            if(!channel){
                return res.status(422).json({msg: 'Nome do Canal obrigatório!'});
            }
            if(!email){
                return res.status(422).json({msg: 'E-mail obrigatório!'});
            }
            if(!password){
                return res.status(422).json({msg: 'Senha obrigatório!'});
            }

            const userExists = await UserModel.findOne({ 'email': email});
            if(userExists){
                return res.status(422).json({msg: "Esse e-mail já está cadastrado, por favor, tente outro."});
            }

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
            const user = new UserModel({
                name,
                channel,
                email,
                password: passwordHash,
                videos,
            });
            const response = await UserModel.create(user);
            res.status(201).json({response, msg: "Usuário criado com sucesso!"});
        }catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    getAll: async (req, res) => {
        try {
            const user = await UserModel.find();
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);

            if (!user) {
                res.status(404).json({ msg: "Usuário não encontrado!" });
                return;
            }

            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);

            if (!user) {
                res.status(404).json({ msg: "Usuário não encontrado!" });
                return;
            }

            const deletedUser = await UserModel.findByIdAndDelete(id);
            res.status(200).json({deletedUser, msg: "Usuário excluído com sucesso!"});
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const user = {
            name: req.body.name,
            channel: req.body.channel,
            email: req.body.email,
            password: req.body.password,
            videos: req.body.videos,
        };

        const updateUser = await UserModel.findByIdAndUpdate(id, user);
        if (!updateUser) {
            res.status(404).json({ msg: "Usuário não encontrado!" });
            return;
        }
        res.status(200).json({user, msg: "Usuário editado com sucesso!"});

    }
};

module.exports = userController;

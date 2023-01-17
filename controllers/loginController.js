const { Login: LoginModel, Login } = require("../models/Login");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {

    create: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email) {
                return res.status(422).json({ msg: 'E-mail obrigatório!' });
            }
            if (!password) {
                return res.status(422).json({ msg: 'Senha obrigatório!' });
            }

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
            
            const login = new LoginModel({
                email,
                password: passwordHash,
            });
            const response = await LoginModel.create(login);
            res.status(201).json({ response, msg: "Login feito com suceso!" });
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    }
}

module.exports = loginController;
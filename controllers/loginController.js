const bcrypt = require('bcrypt');
const { User: UserModel, User } = require("../models/User");
const jwt = require('jsonwebtoken');


const loginController = {

    create: async (req, res) => {
        const {email, password} = req.body;
        
        try {
            
            if (!email) {
                return res.status(400).json({ msg: 'E-mail obrigatório!' });
            }
            if (!password) {
                return res.status(400).json({ msg: 'Senha obrigatório!' });
            }
            
            const user = await UserModel.findOne({ 'email': email}).select("+password");

            console.log(user._id);

            if(!user){
                return res.status(404).json({msg: "Usuário não encontrado!."});
            }

            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
           
            const checkPassWord = await bcrypt.compare(password, user.password);
            if(!checkPassWord){
                return res.status(422).json({msg: "Senha inválida!"});
            }

            const secret = process.env.SECRET;
            const token = jwt.sign({
                id: user._id.toString(),
                },
                secret,
            )

            // const response = await LoginModel.create(login);
            res.status(200).json({ user, msg: "Login feito com suceso!" , token});
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
        
    }
}

module.exports = loginController;
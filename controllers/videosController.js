const { Videos: VideosModel, Videos } = require("../models/Video");

const videosController = {
    create: async (req, res) => {
        try {
            const videos = {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description,
                thumbnail: req.body.thumbnail,
                like: req.body.like,
                unlike: req.body.unlike,
                views: req.body.views,
                idUser: req.body.idUser,
                channel: req.body.channel,
            };

            const response = await VideosModel.create(videos);
            res.status(201).json({ response, msg: "Video adicionado com sucesso!" });
        } catch (error) {
            console.log(`Erro: ${error}`);
        }
    },
    getAll: async (req, res) => {
        try {
            const videos = await VideosModel.find();
            res.json(videos);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const videos = await VideosModel.findById(id);

            if (!videos) {
                res.status(404).json({ msg: "Vídeo não encontrado!" });
                return;
            }

            res.json(videos);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const videos = await VideosModel.findById(id);

            if (!videos) {
                res.status(404).json({ msg: "Vídeo não encontrado!" });
                return;
            }

            const deletedVideo = await VideosModel.findByIdAndDelete(id);
            res.status(200).json({ deletedVideo, msg: "Vídeo excluído com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const videos = {
            title: req.body.title,
            url: req.body.url,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            like: req.body.like,
            unlike: req.body.unlike,
            views: req.body.views,
            idUser: req.body.idUser,
            channel: req.body.channel,
        };

        const updateVideos = await VideosModel.findByIdAndUpdate(id, videos);
        if (!updateVideos) {
            res.status(404).json({ msg: "Vídeo não encontrado!" });
            return;
        }
        res.status(200).json({ videos, msg: "Vídeo editado com sucesso!" });

    }
};

module.exports = videosController;

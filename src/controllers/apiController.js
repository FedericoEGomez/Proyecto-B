const {Foods} = require("../models/foods");

class ApiController {

    async verComidas (req, res) {
        const foods = await Foods.find();
        console.log(foods);
        res.status(200).json({foods});
    }

    async guardarComida(req, res) {
        try {
            const foods = new Foods(req.body);
            await foods.save();
            console.log(foods);
            res.status(201).json({foods});
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        } 
    }
}

module.exports = new ApiController
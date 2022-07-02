const Name = require('../models/name');

exports.createName = (req, res) => {
    const nam = new Name(req.body)

    nam.save()
    .then((name) => {
        return res.status(201).json({name})
    })  
    .catch((error) => {
        return res.status(400).json({error})
    })
}

exports.getAllNames = (req, res) => {
    Name.find()
    .then((names) => {
        return res.status(201).json({names})
    })
    .catch((error) => {
        return res.status(400).json({error})
    })
}
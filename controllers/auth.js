module.exports.login = function (req, res) {
    res.status(200).json({
        login: 'from controller'
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}
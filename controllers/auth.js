const User = requir

const bycript = require('bcryptjs')

//async перед функцией - значит, что будем обращаться к БД
module.exports.login = async function (req, res) {

}

module.exports.register = async function (req, res) {
    // email password
    const candidate =  await User.findOne({email: req.body.email})

    if (candidate) {
        // Пользователь существует, нужно отправить ошибку
        res.status(409).json({
            message: 'Такой email уже занят. Попробуйте другой'
        })
    } else {
         // нужно создать пользователя
       const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch(e) {
            // Обработать ошибку
        }

    }
}
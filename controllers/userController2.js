const User = require('../models/UsersModel')


const createUser = async (req, res) => {
    const { full_name, email, password } = req.body
    if (!full_name || !email || !password) {
        res.status(400).json({ msg: "Faltan paramteros obligatorios", data: { full_name, email, password } })
    }
    try {
        const user = new User({ full_name, email, password })
        await user.save();
        res.status(200).json({ msg: 'Usuario creado', data: user })

    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error', data: {} })

    }
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ msg: 'Ok', data: users })
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se pudo traer todos los usuarios.' })

    }
}
const getUsersById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
        if (user) {

            res.status(200).json({ msg: 'Usuario encontrado', data: user })
        } else {
            res.status(404).json({ msg: 'Usuario no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido buscar por id.', data: {} })

    }
}
const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id)
        if (user) {
            res.status(200).json({ msg: 'Usuario eliminado', data: {} })
        } else {
            res.status(404).json({ msg: 'Usuario no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido eliminar por id.', data: {} })

    }
}
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { full_name,email,password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id,{ full_name,email,password },{new:true})
        if (user) {
            res.status(200).json({ msg: 'Usuario actualizado', data: {user} })
        } else {
            res.status(404).json({ msg: 'Usuario no existe, no es posible actualizar', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido actualizar por id.', data: {} })

    }
}
module.exports = { createUser, getUsers, getUsersById, deleteUserById, updateUserById }
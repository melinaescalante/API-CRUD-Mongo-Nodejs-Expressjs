const jwt = require('jsonwebtoken')
const User = require('../models/UsersModel')
const dotenv = require('dotenv').config()

const bcrypt = require('bcrypt')
const secretKey = process.env.SECRETKEY
const salt = 10
const createUser = async (req, res) => {
    const { full_name, email, password } = req.body
    if (!full_name || !email || !password) {
        res.status(400).json({ msg: "Faltan paramteros obligatorios", data: { full_name, email, password } })
    }
    //Hasheo contraseña
    const passwordHash = await bcrypt.hash(password, salt)
    try {
        const user = new User({ full_name, email, password: passwordHash })
        await user.save();
        res.status(200).json({ msg: 'Usuario creado', data: user })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error', data: {} })

    }
}
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { full_name, email, password } = req.body;
    if (!full_name || !email || !password) {
        res.status(400).json({
            msg: "Faltan parámetros obligatorios",
            data: { full_name, email, password }
        }); return
    }
    //Hasheo contraseña
    const passwordHash = await bcrypt.hash(password, salt)
    try {
        const user = await User.findByIdAndUpdate(id, { full_name, email, password: passwordHash }, { new: true })
        if (user) {
            res.status(200).json({ msg: 'Usuario actualizado', data: { user } })

        } else {
            res.status(404).json({ msg: 'Usuario no existe, no es posible actualizar', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido actualizar por id.', data: {} })

    }
}
const login = async (req, res) => {
    try {
        console.log(req)
        const { email, password } = req.body
        const user = await User.find({ email: email })
        //Verificamos si mail existe
        if (!user[0]) {
            res.status(401).json({ msg: 'El email no existe', data: {} })
            return
        }


        const passwordVerified = await bcrypt.compare(password, user[0].password)
        if (!passwordVerified) {
            res.status(401).json({ msg: 'La contraseña es incorrecta', data: {} })
            return
        }
        //generamos token
        const data = {
            userId: user._id,
            userName: user.full_name
        }
        const token = jwt.sign(data, secretKey, { expiresIn: '12h' })
        console.log(token)
        res.status(201).json({ msg: 'Se ha logueado correctamente', data: { jwt: token , email:email} })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Ha ocurrido un error.', data: {} })
    }
}
const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ msg: 'Usuarios registrados', data: users })
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
const getUserByName = async (req, res) => {
    const { full_name } = req.params;
    if (!full_name) {
        res.status(400).json({ msg: "Falta introducir el nombre para iniciar la busqueda.", data: { full_name } })
    }

    try {
        const user = await User.findOne({ full_name });
        if (user) {
            res.status(200).json({ msg: 'Usuario encontrado por nombre', data: { user } })
        } else {
            res.status(404).json({ msg: 'Usuario no existente', data: {} })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Ha ocurrido un error, no se ha podido buscar por nombre.', data: {} })

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

module.exports = { createUser, getUsers, getUsersById, deleteUserById, updateUserById, login, getUserByName }
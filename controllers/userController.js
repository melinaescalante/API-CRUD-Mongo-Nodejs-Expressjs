const { Users } = require("../models/Users");
const getUsers = async (request, response) => {
  const users = new Users();
  const data = await users.readJson();
  console.table(data);
  response.status(200).send(data);
};
const getUserById = async (request, response) => {
  const user = new Users();
  const users = await user.readJson();
  const id = parseInt(request.params.id);

  const userFound = await user.getUserById(id);
  if (userFound) {
    response.status(202).json({ usuario: userFound });
  } else {
    response.status(400).json({ mensaje: "No existe usuario" });
  }
};

const addUser = async (request, response) => {
  const users = new Users();

  const user = request.body;
  if (
    user.full_name &&
    user.email 
  ) {
    await users.addUserJson(user);
    response.status(202).json({ mensaje: "Usuario Guardado" });
  } else {
    response.status(400).json({ mensaje: "Usuario Incompleto" });
  }
};
const updateUser = async (request, response) => {
  const users = new Users();

  const id = parseInt(request.params.id);
  const userFound = await users.getUserById(id);
  const information = request.body;
  console.log(
    information.full_name,
    information.email
  );

  users.updateUser(
    id,
    information.full_name,
    information.email,
  );

  if (userFound) {
    response
      .status(202)
      .json({ mensaje: "Usuario correctamente actualizado" });
  } else {
    response.status(400).json({ mensaje: "No existe usuario" });
  }
};
const deleteUser = async (request, response) => {
    const id = parseInt(request.params.id);  
    const users = new Users();               
    const userList = await users.readJson(); 
    const userFound = await users.getUserById(id); 
    
    if (userFound) {
      const updatedUserList = userList.filter(user => user.id !== id);
      users.users = updatedUserList;
      await users.writeJson(); 
      
      response.status(200).json({ mensaje: "Usuario eliminado" });
    } else {
      response.status(400).json({ mensaje: "Usuario no se ha podido eliminar" });
    }
  };
  
  
module.exports = { addUser, getUserById, getUsers, updateUser , deleteUser};




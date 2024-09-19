const fs = require("fs/promises");
const crypto = require("crypto");
class Users {
  users = [];
  
  path = "data/users.json";
  constructor() {
    this.readJson();
  }
  async readJson() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      const json = JSON.parse(data);
      this.users = json;
      return this.users
    } catch (error) {
      console.error('Ocurrio un error ', error)
    }
  }

  async writeJson() {
    try {
      const data = JSON.stringify(this.users, null, 2);
      await fs.writeFile(this.path, data);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async addUserJson(user) {
    const id= crypto.randomUUID()
    user.id= id
    await this.readJson();

    this.users.push(user);

    await this.writeJson();
  }
  async getUserById(id) {
    await this.readJson()

      const findUser = this.users.filter((user) => user.id === id);
      if (!findUser != []) {
        console.error("Not Found");
      } else {
        return findUser;
      }
  }
  async updateUser(id, full_name, email){
    await this.readJson()
    const findUser = await this.users.find((user) => user.id === id);
    if (full_name|| email) {
        findUser.full_name=full_name
        findUser.email=email
      
    }
    await this.writeJson()

  }
}
module.exports = { Users };
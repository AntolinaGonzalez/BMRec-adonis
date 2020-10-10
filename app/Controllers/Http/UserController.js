"use strict";
const User = use("App/Models/BmRecUser");
const Hash = use("Hash");

class UserController {
  async store({ request, response }) {
    const userData = request.only([
      "username",
      "first_name",
      "last_name",
      "email",
      "password",
    ]);
    const safePassword = await Hash.make(userData.password);
    const user = await User.create({ ...userData, password: safePassword });

    return response.status(201).json(user);
  }

  async get({ request, response }) {

    const userData = request.only(["username", "email", "password"]);
    let user = await User.findBy('username',userData.username);
    if(!user){
      user = await User.findBy('email', userData.email)
    }
    if(user){
      const isSame = await Hash.verify(userData.password, user.password);
      if(isSame){
        return response.status(201).json(user);
      }
    }

    return response.status(404)
  }

  
}

module.exports = UserController;

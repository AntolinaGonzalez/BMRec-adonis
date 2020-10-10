"use strict";
const User = use("App/Models/BmRecUser");
const Hash = use("Hash");

class UserController {
  async store({ request, response,auth }) {
    const userData = request.only([
      "username",
      "first_name",
      "last_name",
      "email",
      "password",
    ]);
    const safePassword = await Hash.make(userData.password);
    const user = await User.create({ ...userData, password: safePassword });
    auth.login(user)
    return response.status(201).json(user);
  }

  async login({ request, response, auth }) {
    console.log("entro");
    const userData = request.only(["username", "email", "password"]);
    let user = await User.findBy("username", userData.username);
    console.log('antes se', user)
    if (!user) {
      user = await User.findBy("email", userData.email);
    }
    if (user) {
      const isSame = await Hash.verify(userData.password, user.password);
      if (isSame) {
        console.log('el user',user);
        await auth.attempt(userData.email)

        return 'Logged in successfully'
      }
    }

    return response.status(404);
  }
  show({ auth, params }) {
    console.log('show user')
    console.log(auth.user)
    return auth.user;
  }
}

module.exports = UserController;

"use strict";
const User = use("App/Models/BmRecUser");

class UserController {

  async store({ request, response, auth, view }) {
    console.log('holaaa')
    try {
      console.log('holaaa2')
      const userData = request.only([
        "username",
        "first_name",
        "last_name",
        "email",
        "password",
      ]);
      console.log(userData)
      const user = await User.create(userData);
      console.log(user);
      await auth.login(user);
      return response.redirect("/admin");
    } catch (err) {
      return response.redirect("/admin");
    }
  }
  async logout({ auth, view, response }) {
    await auth.logout();
    return response.redirect("/");
  }
  async login({ auth, request, view, response }) {
    const { email, password } = request.all();
    await auth.attempt(email, password);
    return response.redirect("/admin");
  }

  async show({ auth, params }) {
    return await auth.user;
  }

  async update({ request, response, auth }) {
    const user = auth.user;
    const userData = request.only([
      "username",
      "first_name",
      "last_name",
      "email",
      "password",
    ]);

    user.merge(userData);
    user.save();
    return response.status(201).json(user);
  }

  async delete({ request, response, auth }) {
    const user = auth.user;

    user.delete();

    return response.status(201);
  }
}

module.exports = UserController;

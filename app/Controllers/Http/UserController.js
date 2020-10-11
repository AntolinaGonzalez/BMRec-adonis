"use strict";
const User = use("App/Models/BmRecUser");

class UserController {
  async store({ request, response, auth }) {
    const userData = request.only([
      "username",
      "first_name",
      "last_name",
      "email",
      "password",
    ]);
    const user = await User.create(userData);
    await auth.login(user);
    return response.status(201).json(user);
  }

  async login({ auth, request }) {
    const { email, password } = request.all();
    console.log(email,password)
    await auth.attempt(email, password);
    return {message: 'login'}
  }

  async show({ auth, params }) {
    return await auth.user;
  }

  async logout({ auth }) {
    await auth.logout();
    return { message: "log out" };
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

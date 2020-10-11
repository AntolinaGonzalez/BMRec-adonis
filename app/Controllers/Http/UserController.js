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

    const user = await auth.attempt(email, password);

    return response.status(201).json(user);
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
}

module.exports = UserController;

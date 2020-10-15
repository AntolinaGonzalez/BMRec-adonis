"use strict";
const User = use("App/Models/BmRecUser");

class UserController {
  async logout({ auth, view }) {
    await auth.logout();
    return view.render("index");
  }
  async store({ request, response, auth, view }) {
    try {
      const userData = request.only([
        "username",
        "first_name",
        "last_name",
        "email",
        "password",
      ]);
      const user = await User.create(userData);
      console.log(user);
      await auth.login(user);
      return response.status(201).json(user);
    } catch (err) {
      return view.render("index");
    }
  }

  async login({ auth, request, view }) {
    const { email, password } = request.all();
    await auth.attempt(email, password);
    return view.render("admin.index");
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

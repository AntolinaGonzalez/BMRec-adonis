"use strict";
const Recommendation = use("App/Models/Recommendation");

class HomeController {
  async index({ view, auth }) {
    const user = auth.user.id;
    let recommedations = await Recommendation.query()
      .where("user_id", user)
      .fetch();

    return view.render("admin.index", {
      recommendations: recommedations.toJSON(),
    });
  }

  async edit({ view, params }) {
    const recommendation = await Recommendation.find(params.id);

    return view.render("admin.edit", {
      recommendation: recommendation.toJSON(),
    });
  }
}

module.exports = HomeController;

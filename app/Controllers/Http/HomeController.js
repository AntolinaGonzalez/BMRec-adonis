"use strict";
const Recommendation = use("App/Models/Recommendation");

class HomeController {
  async index({ view, auth }) {
    const user = auth.user;
    const recommendations = await Recommendation.all();
    if (!user) {
      return view.render("index", {
        recommendations: recommendations.toJSON(),
      });
    }
    return view.render("index", {
      recommendations: recommendations.toJSON(),
      user: user.toJSON(),
    });
  }

  async show({ view, params }) {
    const recommendation = await Recommendation.find(params.id);
    if (!recommendation) {
      return view.render("show");
    }
    return view.render("show", { recommendation: recommendation.toJSON() });
  }
}

module.exports = HomeController;

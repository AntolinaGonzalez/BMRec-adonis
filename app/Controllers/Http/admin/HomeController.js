"use strict";
const Recommendation = use("App/Models/Recommendation");

class HomeController {
  async index({ view, auth }) {
    const recommendations = await Recommendation.query().with("user").fetch();

    return view.render("admin.index", {
      recommendations: recommendations.toJSON(),
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

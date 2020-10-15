"use strict";
const Recommendation = use("App/Models/Recommendation");

class HomeController {
  async index({ view }) {
    const recommendations = await Recommendation.all();
    return view.render("index", { recommendations: recommendations.toJSON() });
  }

  async show({ view, params }) {
    const recommendation = await Recommendation.find(params.id);

    return view.render('show',{recommendation: recommendation.toJSON()});
  }
}

module.exports = HomeController;

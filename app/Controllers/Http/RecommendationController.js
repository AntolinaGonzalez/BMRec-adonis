"use strict";
const Recommendation = use("App/Models/Recommendation");
class RecommendationController {
  async store({ request, response, auth }) {
    const user = auth.user;
    const recommendationData = request.only(["title", "description"]);

    const recommendation = await Recommendation.create({
      ...recommendationData,
      user_id: user.id,
    });

    return response.redirect("/admin");
  }

  create({ view }) {
    return view.render("admin.createRec");
  }
  async update({ request, response, params, view }) {
    const recommendation = await Recommendation.find(params.id);
    const recommendationData = request.only(["title", "description"]);
    recommendation.merge(recommendationData);
    recommendation.save();

    return response.redirect("/admin");
  }

  async delete({ request, response, params }) {
    const recommendation = await Recommendation.find(params.id);
    recommendation.delete();

    return response.redirect("/admin");
  }
}

module.exports = RecommendationController;

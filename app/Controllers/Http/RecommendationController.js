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

    return response.status(201).json(recommendation);
  }

  async update({ request, response,params }) {
    const recommendation = await Recommendation.find(params.id);
    const recommendationData = request.only(["title", "description"]);
    recommendation.merge(recommendationData);
    recommendation.save();

    return response.status(201).json(recommendation);
  }

  async delete({request,response,params}){
    const recommendation = await Recommendation.find(params.id);
    recommendation.delete()
  }
}

module.exports = RecommendationController;

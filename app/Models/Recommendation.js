'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Recommendation extends Model {
  static get table() {
    return "recommendations";
  }

  static get primaryKey() {
    return "id";
  }
  user() {
    return this.belongsTo('App/Models/BmRecUser');
  }
}

module.exports = Recommendation

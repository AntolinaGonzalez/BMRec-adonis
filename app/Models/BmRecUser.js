"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");
const Hash = use("Hash");
class BmRecUser extends Model {
  static boot() {
    super.boot();

    this.addHook("beforeCreate", async (userInstance) => {
      userInstance.password = await Hash.make(userInstance.password);
    });
  }
  static get table() {
    return "bm_rec_users";
  }

  static get primaryKey() {
    return "id";
  }
}

module.exports = BmRecUser;

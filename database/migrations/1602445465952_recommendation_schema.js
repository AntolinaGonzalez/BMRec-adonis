"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RecommendationSchema extends Schema {
  up() {
    this.create("recommendations", (table) => {
      table.increments();
      table.integer("user_id").unsigned().notNullable();
      table.string("title", 250).notNullable();
      table.string("description", 1500).notNullable();
      table.string("image_url");
      table.timestamps();

      table.foreign('user_id').references('id').inTable('bm_rec_users');
    });
  }

  down() {
    this.drop("recommendations");
  }
}

module.exports = RecommendationSchema;

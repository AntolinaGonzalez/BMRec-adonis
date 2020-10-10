"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BmRecUsersSchema extends Schema {
  up() {
    this.create("bm_rec_users", (table) => {
      table.increments();
      table.string("username", 80).notNullable().unique();
      table.string("first_name", 254).notNullable();
      table.string("last_name", 60).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bm_rec_users");
  }
}

module.exports = BmRecUsersSchema;

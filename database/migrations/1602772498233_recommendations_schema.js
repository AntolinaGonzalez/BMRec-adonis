'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecommendationsSchema extends Schema {
  up () {
    this.table('recommendations', (table) => {
      table.string("summary", 180)
    })
  }

  down () {
    this.table('recommendations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RecommendationsSchema

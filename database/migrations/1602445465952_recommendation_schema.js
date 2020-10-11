'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RecommendationSchema extends Schema {
  up () {
    this.create('recommendations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('recommendations')
  }
}

module.exports = RecommendationSchema

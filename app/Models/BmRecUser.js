'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class BmRecUser extends Model {
  static get table () {
    return 'bm_rec_users'
  }

  static get primaryKey () {
    return 'id'
  }
}

module.exports = BmRecUser

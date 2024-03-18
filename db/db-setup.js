const knex = require('knex');
const knexFile = require('./knexfile');
const { Model } = require('objection');

const setUpdb = async() => {
  const db = knex(knexFile.development);
  Model.knex(db);
}

module.exports = setUpdb;
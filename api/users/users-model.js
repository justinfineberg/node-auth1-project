/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
const db = require('../../data/db-config')

async function find() {
const users = await db('users').select('*')
return users
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
async function findBy(filter) {
  return db("users").where(filter);

}

/**
  resolves to the user { user_id, username } with the given user_id
 */
async function findById(user_id) {
  const user = await db('users').where(user_id, "user_id")
  return user
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
const id = await db('users').insert(user)
return id
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findBy,
  findById,
  add
}
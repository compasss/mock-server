'use strict'
const template = require('./template')
module.exports = async function (fastify, opts, next) {
  fastify.post('/login', async function (request, reply) {
    reply.send(template.authInfo)
  })
  fastify.post('/logout', async function (request, reply) {
    reply.send('success')
  })
}

module.exports.autoPrefix = '/auth'
// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }

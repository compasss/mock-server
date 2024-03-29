'use strict'

module.exports = async function (fastify, opts) {

  fastify.get('/', function (request, reply) {
    reply.send({ root: true })
  })
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }

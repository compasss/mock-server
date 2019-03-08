'use strict'
const Mock = require('mockjs')
const { checkTemplate, checkHistory, entryList } = require('./template')

module.exports = function (fastify, opts, next) {
  fastify.get('/remote-check-list', function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let rows = parseInt(request.query.rows || 10);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let template = {
      totalRecodes: 25
    };
    template[key] = [checkTemplate]
    let data = Mock.mock(template)
    reply.send(data)
  })

  fastify.get('/remote-check-detail/:id', function (request, reply) {
    let data = Mock.mock({
      'data': checkTemplate
    })
    reply.send(data)
  })

  fastify.post('/remote-check-detail/:id', function (request, reply) {
    let data = Mock.mock({
      'data': checkTemplate
    })
    reply.send(data)
  })

  fastify.get('/remote-check-history/:id', function (request, reply) {
    let data = Mock.mock({
      'id': request.params.id,
      'data|7': [checkHistory],
      'totalRecodes': 7
    })
    reply.send(data)
  })

  fastify.get('/entry-list', function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let rows = parseInt(request.query.rows || 10);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let template = {
      totalRecodes: 25
    };
    template[key] = [entryList]
    let data = Mock.mock(template)
    reply.send(data)
  })

  next()
}

module.exports.autoPrefix = '/imgread'
// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }

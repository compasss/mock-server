'use strict'
const Mock = require('mockjs')
const template = require('./template')
module.exports = async function (fastify, opts, next) {
  fastify.get('/manage/type/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let rows = parseInt(request.query.rows || 10);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.list]
    let data = Mock.mock(_template)
    reply.send(data)
  })

  fastify.post('/manage/type/start', async function(request, reply) {
    reply.send('success')
  })
  fastify.post('/manage/type/delete', async function(request, reply) {
    reply.send('success')
  })
}

module.exports.autoPrefix = '/hsw'

'use strict'
const Mock = require('mockjs')
const template = require('./template')
module.exports = async function (fastify, opts, next) {
  fastify.get('/manage/type/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.manageTypeList]
    let data = Mock.mock(_template)
    reply.send(data)
  })

  fastify.post('/manage/type/start', async function(request, reply) {
    reply.send('success')
  })
  fastify.post('/manage/type/delete', async function(request, reply) {
    reply.send('success')
  })

  fastify.get('/road/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.roadList]
    let data = Mock.mock(_template)
    reply.send(data)
  })
  fastify.get('/node/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.nodeList]
    let data = Mock.mock(_template)
    reply.send(data)
  })
  fastify.get('/seg/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.segList]
    let data = Mock.mock(_template)
    reply.send(data)
  })
  fastify.get('/device/list', async function (request, reply) {
    let page = parseInt(request.query.page || 1);
    let totalPage = 3;  // 总共的页数
    let key = page === totalPage ? 'data|1-5' : 'data|10';
    let _template = {
      totalRecords: 25
    };
    _template[key] = [template.deviceList]
    let data = Mock.mock(_template)
    reply.send(data)
  })
}

module.exports.autoPrefix = '/hsw'

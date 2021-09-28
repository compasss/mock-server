'use strict'
const Mock = require('mockjs')

module.exports = function (fastify, opts, next) {
  fastify.get('/example', function (request, reply) {
    reply.send('this is an example')
  })

  fastify.get('/insur', function (request, reply) {
    let data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name|5-20': '张三',
        'idNumber': /\d{21}/,
        'email': '@email',
        'busiInfo': {
          'id|+1': 1,
          'tradeId': /\d{20}/,
          'hospitalName': '医院名称'
        }
      }]
    })
    reply.send(data)
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }

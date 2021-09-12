const Mock = require('mockjs')
module.exports.list = {
  'uuid|+1': 1,
  'name': function() {
    return Mock.Random.cname();
  },
  'role|1': ['操作员', '管理员'],
  'status|1': ['open', 'close']
}
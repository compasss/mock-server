const Mock = require('mockjs')
module.exports.list = {
  'uuid|+1': 1,
  'reason': function() {
    return Mock.Random.csentence(5, 15);
  },
  'detail': function() {
    return Mock.Random.cparagraph(3, 5);
  },
  'opTime': function() {
    return Mock.Random.date('yyyy-MM-dd HH:mm:ss')
  }
}
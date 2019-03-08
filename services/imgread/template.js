// 阅片限制列表
module.exports.checkTemplate = {
  'siteId|+1': 1,
  'siteName|2-5': '荷花园',
  'cityName': '长沙',
  'checkType': '阅片类型1',
  'checkTypeId': 123,
  'totalNum': /\d{5}/,
  'usedNum': /\d{5}/,
  'leftNum': /\d{5}/,
  'status': 'open'
}

// 阅片限制修改历史历史
module.exports.checkHistory = {
  'checkTime': '2018-11-11',
  'checkName|2-5': 'ab',
  'checkNum': /[+-]\d{2}/
}

// 阅片配置列表
module.exports.entryList = {
  'id|+1': 1,
  'entryName|2-5': '青光眼',
  'seenName': '眼睛有毛病',
  'suggest': '搞点建议',
  'entryNum': 'yyp123459',
  'status': 'open',
  'beizhu': '备注'
}
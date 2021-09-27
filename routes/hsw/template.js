const Mock = require('mockjs')
module.exports.manageTypeList = {
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

module.exports.roadList = {
  'uuid|+1': 1,
  'code|+1': 1,
  'name': function() {
    return Mock.Random.csentence(3, 5);
  },
  'enable': true
}

module.exports.nodeList = {
  'uuid|+1': 1,
  'code|+1': 1,
  'name': function() {
    return Mock.Random.csentence(3, 5);
  },
  'longitudeAmap|100-116.5': '112',
  'latitudeAmap|28-29.5': '12',
  'stakeNo': '桩号',
  'roadName': function() {
    return Mock.Random.csentence(3, 5);
  },
  'enabled': true
}

module.exports.segList = {
  'uuid|+1': 1,
  'segName': function() {
    return Mock.Random.csentence(3, 5);
  },
  'startPosition': '1.00',
  'endPosition': '2.00',
  'kilo': '里程',
  'segTypeCode': 'fefe',
  'laneNum': 2,
  'enabled': true
}

module.exports.deviceList = {
  'uuid|+1': 1,
  'name': function() {
    return Mock.Random.csentence(3, 5);
  },
  'typeCode': '123',
  'ioTypeCode': '2.00',
  'location': '位置',
  'direction': 'west',
  'ip': '192.168.1.1',
  'port': '9000',
  'user': 'user',
  'password': 'password',
  'enabled': true
}
module.exports.manageTypeList = {
  'uuid|+1': 1,
  'reason': '@csentence(5, 15)',
  'detail': 'cparagraph(3, 5)',
  'opTime': '@date("yyyy-MM-dd HH:mm:ss")'
}

module.exports.roadList = {
  'uuid': '@guid',
  'code|+1': 1,
  'name': '@csentence(3, 5)',
  'enable': '@boolean'
}

module.exports.nodeList = {
  'uuid|+1': 1,
  'code|+1': 1,
  'name': '@csentence(3, 5)',
  'longitudeAmap|100-116.5': '112',
  'latitudeAmap|28-29.5': '12',
  'stakeNo': '桩号',
  'roadName': '@csentence(3, 5)',
  'enabled': '@boolean'
}

module.exports.segList = {
  'uuid': '@guid',
  'segName': '@csentence(3, 5)',
  'startPosition': '1.00',
  'endPosition': '2.00',
  'kilo': '里程',
  'segTypeCode': 'fefe',
  'laneNum': '@range(3, 7)',
  'enabled': '@boolean'
}

module.exports.deviceList = {
  'uuid': '@guid',
  'name': '@csentence(3, 5)',
  'typeCode': '123',
  'ioTypeCode': '2.00',
  'location': '位置',
  'direction': 'west',
  'ip': '@ip',
  'port': '9000',
  'user': '@string(5)',
  'password': 'string(5)',
  'enabled': '@boolean'
}
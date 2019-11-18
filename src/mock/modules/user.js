import Mock from 'mockjs'

function getList() {
  const data = {
    code: 200,
    data: {
      records: getUser(),
      totalSize: 10
    }
  }
  return {
    url: '/user/list',
    method: 'get',
    response: (params) => {
      return data
    }
  }
}

function getUser(page = 1, pageNum = 10) {
  let content = []
  for(let i=0; i<pageNum; i++){
    let obj = {}
    let index = ((page - 1) * pageNum) + i + 1
    obj.id = index
    obj.name = Mock.mock('@cname')
    obj.sex = Mock.mock('@cword("男女")')
    obj.email = Mock.mock('@email')
    obj.ip = Mock.mock('@ip')
    obj.province = Mock.mock('@region')
    content.push(obj)
  }
  return content
}

export default [
  // 立即执行函数
  (getList)()
]

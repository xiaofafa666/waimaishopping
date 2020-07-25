// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  var dbName = event.dbName;
  var filter = event.filter ? event.filter : null;
  var nowPage = event.nowPage ? event.nowPage : 1;
  var pageSize = event.pageSize ? event.pageSize : 10;
  const countResult = await db.collection(dbName).where({filter}).count();
  const total = countResult.total;
  const totalPage = Math.ceil(total / 10);
  var hasMore;
  if (nowPage > totalPage || nowPage == totalPage) {
    hasMore = false;
  } else {
    hasMore = true;
  }
  return db.collection(dbName).where({filter}).skip(((nowPage - 1)*pageSize)).limit(pageSize).get().then(res => {
    res.hasMore = hasMore;
    return res;
  })
}
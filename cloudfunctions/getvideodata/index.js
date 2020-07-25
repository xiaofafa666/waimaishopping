// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'cdf-ydtks'
})

const db = cloud.database()
const _ = db.command
const videodata = db.collection('videodata')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let result = await videodata.get()
  console.log(result)
  return result
}
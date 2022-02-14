const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const showMsg = (title,icon='success',duration = 2000) =>{
  wx.showToast({
    title,
    icon,
    duration
  })
}
const toast ={
  success:(msg,duration)=> showMsg(msg,'success',duration),
  error:(msg,duration)=> showMsg(msg,'error',duration),
  loading:(msg,duration)=> showMsg(msg,'loading',duration),
  none:(msg,duration)=> showMsg(msg,'none',duration),
}

module.exports = {
  formatTime: formatTime,
  toast
}

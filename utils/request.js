// import { host } from '/config/index'
const { host } = require('../config/index')

export const http = ( url, data = {}, method = 'POST' ) => {
  return new Promise((resolve, reject) => {
      wx.request({
          url: `${host}${url}`,
          method,
          data,
          header: {
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          success: (res) => {
              if (res.statusCode !== 200) {
                  reject({
                      code : 500,
                      hints: '服务器忙，请稍后重试',
                  });
              }else if(res.data.code === 200) {
                  resolve(res.data);
              }else {
                  reject(res.data);
              }
          },
          fail: (res) => {
              reject({
                  code : 0,
                  hints: '网络错误',
              });
          },
      });
  });
};

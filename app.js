//app.js
import { login } from 'utils/api.js'
import { setStorageAsync,getStorage } from 'utils/index'
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // this.userLogin()
    // login().then(res=>{
    //   this.globalData.isLogin = true;
    // })
    // this.globalData.isLogin = getToken()
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
          
        }
      }
    })
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
         	this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
          // console.log(capsule)
          // console.log(e.statusBarHeight)
        } else {
        	this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  userLogin: async function(){
    let token = await getStorage('token');
    if (token){
      // 本地里存在token就没必要登陆了
      return
    }else{
      const {code, data,msg } = await login();
      if (code !==200){
        console.log('登陆失败',msg);
        return
      }
      console.log('data',data);
      token = `${data.tokenHead} ${data.token}`
    }
    this.globalData.token = token
    setStorageAsync('token',token)
    
  },

  globalData: {
    userInfo: null,
    token:'',
    isLogin:new Promise((resolve,reject)=>{
      login().then(res=>{
        resolve(true)
      })
    }),
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ],
    taBarList:[
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/image/tabbar-icon/unhome.png",
        "selectedIconPath": "/image/tabbar-icon/home.png"
      },
      // {
      //   "pagePath": "/pages/like/like",
      //   "text": "收藏",
      //   "iconPath": "/image/tabbar-icon/unlike.png",
      //   "selectedIconPath": "/image/tabbar-icon/like.png"
      // },
      {
        "pagePath": "/pages/updata/updata",
        "text": "发布",
        "iconPath": "/image/tabbar-icon/unupdata.png",
        "selectedIconPath": "/image/tabbar-icon/updata.png"
      },
      // {
      //   "pagePath": "/pages/msg/msg",
      //   "text": "消息",
      //   "iconPath": "/image/tabbar-icon/unchat.png",
      //   "selectedIconPath": "/image/tabbar-icon/chat.png"
      // },
      {
        "pagePath": "/pages/me/me",
        "text": "我的",
        "iconPath": "/image/tabbar-icon/unme.png",
        "selectedIconPath": "/image/tabbar-icon/me.png"
      }
    ],
  },

})
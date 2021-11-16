const app=getApp()
Component({
  data: {
    selected: 0,
    // color: "#7A7E83",
    color: "black",
    // selectedColor: "#3cc51f",
    "selectedColor": "blue",
    // "backgrodColor": "#4169E1",
    taBarList:[
      {
        "pagePath": "/pages/index/index",
        "text": "首页",
        "iconPath": "/image/tabbar-icon/unhome.png",
        "selectedIconPath": "/image/tabbar-icon/home.png"
      },
      {
        "pagePath": "/pages/like/like",
        "text": "收藏",
        "iconPath": "/image/tabbar-icon/unlike.png",
        "selectedIconPath": "/image/tabbar-icon/like.png"
      },
      {
        "pagePath": "/pages/updata/updata",
        "text": "上传",
        "iconPath": "/image/tabbar-icon/unupdata.png",
        "selectedIconPath": "/image/tabbar-icon/updata.png"
      },
      {
        "pagePath": "/pages/msg/msg",
        "text": "消息",
        "iconPath": "/image/tabbar-icon/unchat.png",
        "selectedIconPath": "/image/tabbar-icon/chat.png"
      },
      {
        "pagePath": "/pages/me/me",
        "text": "我的",
        "iconPath": "/image/tabbar-icon/unme.png",
        "selectedIconPath": "/image/tabbar-icon/me.png"
      }
    ],
  },
   
 
  lifetimes: {
    // 在组件实例进入页面节点树时赋值
      attached () {

      },
    },
  created(){


  },
  methods: {
    change(){
      // this.setData({list:[{pagePath: "/pages/index/index",text: "我的"}]}) 
      app.logger('i am change')
      t.setData({
        selected: data.index
      })
    },
    switchTab(e) {
      const t=this;
      var data = e.currentTarget.dataset
      var path = data.path
      wx.switchTab({
        url: path,
      })
      app.logger(data.index)
      // t.setData({
      //   selected: data.index
      // })
    }
  }
})
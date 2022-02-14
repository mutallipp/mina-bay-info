const app=getApp()
Component({
  data: {
    selected: 0,
    // color: "#7A7E83",
    color: "black",
    // selectedColor: "#3cc51f",
    "selectedColor": "blue",
    // "backgrodColor": "#4169E1",
    taBarList:app.globalData.taBarList
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
      console.log(data.index)
      // t.setData({
      //   selected: data.index
      // })
    }
  }
})
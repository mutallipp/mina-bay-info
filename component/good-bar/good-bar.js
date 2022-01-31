// component/good-bar/good-bar.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  properties: {

  },
  lifetimes:{
    attached(){
      const iconList = this.data.iconList.sort((a,b)=> b.sort-a.sort)
      this.setData({iconList:iconList})
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    gridCol:4,
    iconList: [{
      icon: 'deliver',
      sort:1,
      color: 'blue',
      badge: 120,
      name: '二手车'
    }, {
      icon: 'babyfill',
      sort:1,
      color: 'red',
      badge: 1,
      name: '找工作'
    }, {
      icon: 'home',
      sort:1,
      color: 'yellow',
      badge: 0,
      name: '租房'
    }, {
      icon: 'shop',
      sort:2,
      color: 'olive',
      badge: 22,
      name: '二手房'
    }, {
      icon: 'recharge',
      sort:1,
      color: 'cyan',
      badge: 0,
      name: '交易'
    }, {
      icon: 'footprint',
      sort:1,
      color: 'blue',
      badge: 0,
      name: '旅游'
    }, {
      icon: 'game',
      sort:1,
      color: 'purple',
      badge: 0,
      name: '生活'
    }, {
      icon: 'similar',
      sort:1,
      color: 'mauve',
      badge: 0,
      name: '更多'
    }, 
],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTab(e){
    }
  }
})

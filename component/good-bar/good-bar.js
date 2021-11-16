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

  /**
   * 组件的初始数据
   */
  data: {
    gridCol:4,
    iconList: [{
      icon: 'deliver',
      color: 'blue',
      badge: 120,
      name: '二手车'
    }, {
      icon: 'babyfill',
      color: 'red',
      badge: 1,
      name: '找工作'
    }, {
      icon: 'home',
      color: 'yellow',
      badge: 0,
      name: '租房'
    }, {
      icon: 'shop',
      color: 'olive',
      badge: 22,
      name: '二手房'
    }, {
      icon: 'recharge',
      color: 'cyan',
      badge: 0,
      name: '交易'
    }, {
      icon: 'footprint',
      color: 'blue',
      badge: 0,
      name: '旅游'
    }, {
      icon: 'game',
      color: 'purple',
      badge: 0,
      name: '生活'
    }, {
      icon: 'similar',
      color: 'mauve',
      badge: 0,
      name: '更多'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

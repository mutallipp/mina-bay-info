const setting={
  title:"SIGAI",
  tokenName:"token",
//不经过token校验的路由
  routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
    //token失效回退到登录页时是否记录本次的路由
    recordRoute: true,
}

module.exports = setting




const state = {
  name: '赵路朋',
  items:[
    {path:'/',name:'首页',component:'layout',icon:'fa-server',noDropdown:true,
      children:[
        {path:'/',name:'首页',component:'layout'},
      ]
    },
    {path:'/',name:'表格',component:'userList',icon:'fa-user',noDropdown:false,
      children:[
        {path:'/table',name:'表格',component:'table'},
      ]
    },
    {path:'/infoList',name:'信息列表',component:'infoList',icon:'fa-envelope',noDropdown:false,
      children:[
        {path:'/infoList',name:'信息列表',component:'infoList'},
      ]
    },


  ],
  isLoadRoutes: false,
  sidebar: {
    opened: true,
    width: '180px'
  },
  isCollapse:false,
  isDropname:false, // 用于显示和隐藏二级菜单
}


export default {
  state
}

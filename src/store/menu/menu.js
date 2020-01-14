const state = {
  name: '王二',
  items: [
    {
      path: '/', name: '首页', component: 'layout', icon: 'fa-server', noDropdown: true,
      children: [
        {path: '/', name: '首页', component: 'layout'},
      ]
    },
    {
      path: '/table', name: '表格', component: 'userList', icon: 'fa-user', noDropdown: false,
      children: [
        {path: '/table', name: '表格', component: 'table'},
      ]
    },
    {
      path: '/echar', name: 'echar', component: 'echar', icon: 'fa-envelope', noDropdown: true,
      children: [
        {path: '/echar', name: 'echar', component: 'table'},
      ]
    },


  ],
  isLoadRoutes: false,
  sidebar: {
    opened: true,
    width: '180px'
  },
  isCollapse: false,
  isDropname: false, // 用于显示和隐藏二级菜单
}


export default {
  state
}

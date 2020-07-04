const state = {
  name: '王二',
  items: [
    {
      path: '/', name: '首页', component: 'layout', icon: 'fa-server', noDropdown: true
    },
    {
      path: '/table', name: '表格', component: 'userList', icon: 'fa-user', noDropdown: false,
      children: [
        {path: '/table', name: '表格', component: 'table'},
      ]
    },
    {
      path: '/echar', name: 'echar', component: 'echar', icon: 'fa-envelope', noDropdown: true
    },
    {
      path: '/edit', name: '富文本', component: 'edit', icon: 'fa-envelope', noDropdown: true
    },
    {
      path: '/homePay', name: '支付', component: 'homePay', icon: 'fa-server', noDropdown: true
    },


  ],
  isLoadRoutes: false,
  sidebar: {
    opened: true,
    width: '200px'
  },
  isCollapse: false,
  isDropname: false, // 用于显示和隐藏二级菜单
}


export default {
  state
}

// 侧边导航配置
// 以下文件格式为描述导航的协议格式
// 你可以调整 asideMenuConfig 里的内容
// 变量名 asideMenuConfig 为 iceworks 检测关键字，请不要修改名称

const asideMenuConfig = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
  },
  // {
  //   path: '/user',
  //   name: 'User Profile',
  //   icon: 'pe-7s-user',
  // },
  // {
  //   path: '/table',
  //   name: 'Table List',
  //   icon: 'pe-7s-note2',
  // },
  // {
  //   path: '/typography',
  //   name: 'Typography',
  //   icon: 'pe-7s-news-paper',
  // },
  // {
  //   path: '/icons',
  //   name: 'Icons',
  //   icon: 'pe-7s-science',
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   icon: 'pe-7s-bell',
  // },
  {
    path: '/nodes',
    name: 'Nodes',
    icon: 'pe-7s-bell',
  },
  {
    path: '/blocks',
    name: 'Blocks',
    icon: 'pe-7s-server',
  },
  {
    path: '/chains',
    name: 'Chains',
    icon: 'pe-7s-graph1',
  },
  {
    path: '/contracts',
    name: 'Contracts',
    icon: 'pe-7s-news-paper',
  },
  {
    path: '/Transactions',
    name: 'transactions',
    icon: 'pe-7s-wallet',
  },
  {
    upgrade: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    icon: 'pe-7s-rocket',
  },
];

export default asideMenuConfig;

// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import TableList from './pages/TableList';
import Typography from './pages/Typography';
import Icons from './pages/Icons';
import Notifications from './pages/Notifications';
import Upgrade from './pages/Upgrade';
import Nodes from './pages/Nodes';
import Blocks from './pages/Blocks';
import Chains from './pages/Chains';
import Contracts from './pages/Contracts';
import Transactions from './pages/Transactions';

const routerConfig = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/user',
    name: 'User Profile',
    component: UserProfile,
  },
  {
    path: '/table',
    name: 'Table List',
    component: TableList,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
  },
  {
    path: '/nodes',
    name: 'Nodes',
    component: Nodes,
  },
  {
    path: '/blocks',
    name: 'Blocks',
    component: Blocks,
  },
  {
    path: '/chains',
    name: 'Chains',
    component: Chains,
  },
  {
    path: '/contracts',
    name: 'Contracts',
    component: Contracts,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
  {
    upgrade: true,
    path: '/upgrade',
    name: 'Upgrade to PRO',
    component: Upgrade,
  },
  {
    redirect: true,
    path: '/',
    to: '/dashboard',
    name: 'Dashboard',
  },
];

export default routerConfig;

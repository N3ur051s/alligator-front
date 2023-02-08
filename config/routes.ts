export default [
  { path: '/login', layout: false, component: './Login' },
  { path: '/dashboard', name: '总览', icon: 'home', component: './Dashboard' },
  { icon: 'crown', name: '组管理', path: '/group', component: './GroupList' },
  { icon: 'database', name: '节点管理', path: '/node', component: './NodeList' },
  { path: '/', redirect: '/dashboard' },
  {
    path: '/admin',
    name: '管理',
    icon: 'setting',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/user' },
      { path: '/admin/user', name: '用户', component: './Admin/User' },
      { path: '/admin/role', name: '角色', component: './Admin/Role' },
    ],
  },
  { path: '*', layout: false, component: './404' },
];

import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

function getRoutes() {
  const { routes } = loadRouters();
  /**
   * 如果要对 routes 做一些处理，请在这里修改
   */
  return routes;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes()
})

export default router;

/** 以下代码不要修改 */
function loadRouters() {
  const context = import.meta.glob("../views/**/*.vue", { eager: true });
  const routes: RouteRecordRaw[] = [];

  Object.keys(context).forEach((key: any) => {
    if (key === "./index.ts") return;
    let name = key.replace(/(\.\.\/views\/|\.vue)/g, '');
    let path = "/" + name.toLowerCase();
    if (name === "Index") path = "/";
    routes.push({
      path: path,
      name: name,
      component: () => import(`../views/${name}.vue`)
    })
  });

  return { context, routes }
}
import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
// import CustomPlaceholder from '../basicUI/Placeholder'

// 延迟加载回调
const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback='正在加载'>
      <Component {...props}></Component>
    </Suspense>
  );
};

// 组件懒加载
const PageWallPaper = lazy(() => import("../views/WallPaper/WallPaper.jsx"));
const PageAbout = lazy(() => import("../views/About/About.jsx"));
const Page404 = lazy(() => import("../views/404"));
const Page403 = lazy(() => import("../views/403"));
const Page500 = lazy(() => import("../views/500"));

export default [
  {
    path: "/",
    component: BasicLayout,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/wallpaper/9"} />,
      },
      {
        path: "/wallpaper/:id",
        exact: true,
        component: SuspenseComponent(PageWallPaper),
      },
      {
        path: "/about",
        exact: true,
        component: SuspenseComponent(PageAbout),
      },
      {
        path: "/403",
        exact: true,
        component: SuspenseComponent(Page403),
      },
      {
        path: "/500",
        exact: true,
        component: SuspenseComponent(Page500),
      },
      {
        path: "/*",
        exact: true,
        component: SuspenseComponent(Page404),
      },
    ],
  },
];

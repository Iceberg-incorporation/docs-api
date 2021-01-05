import { ApiBannerListAllView,ApiShortcutListAllView } from '@doc-api/views'

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/user/student/home/banner/list",
    sidebar: () => <div>banner</div>,
    main: () => <ApiBannerListAllView></ApiBannerListAllView>
  },
  {
    path: "/user/student/home/shortcut/list",
    sidebar: () => <div>banner</div>,
    main: () => <ApiShortcutListAllView></ApiShortcutListAllView>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default routes
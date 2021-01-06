import {
  ApiBannerListAllView, ApiShortcutListAllView, ApiFreeVideoListView,
  ApiCategoryListAllView, ApiLessonRandomListView, ApiLessonCatListAllView,
  ApiCommentCreateView, ApiCommentUpdateView, ApiCommentRemoveView
} from '@doc-api/views'

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
    sidebar: () => <div>shortcut</div>,
    main: () => <ApiShortcutListAllView></ApiShortcutListAllView>
  },
  {
    path: "/user/student/home/video-free/list",
    sidebar: () => <div>video-free</div>,
    main: () => <ApiFreeVideoListView></ApiFreeVideoListView>
  },
  {
    path: "/user/student/home/category/list",
    sidebar: () => <div>category</div>,
    main: () => <ApiCategoryListAllView></ApiCategoryListAllView>
  },
  {
    path: "/user/student/home/random-lesson/list",
    sidebar: () => <div>random-lesson</div>,
    main: () => <ApiLessonRandomListView></ApiLessonRandomListView>
  },
  {
    path: "/user/student/home/lesson-by-category/list",
    sidebar: () => <div>lesson-by-category</div>,
    main: () => <ApiLessonCatListAllView></ApiLessonCatListAllView>
  },
  {
    path: "/user/student/lesson/comment/create",
    sidebar: () => <div>comment</div>,
    main: () => <ApiCommentCreateView></ApiCommentCreateView>
  },
  {
    path: "/user/student/lesson/comment/update",
    sidebar: () => <div>comment</div>,
    main: () => <ApiCommentUpdateView></ApiCommentUpdateView>
  },
  {
    path: "/user/student/lesson/comment/remove",
    sidebar: () => <div>comment</div>,
    main: () => <ApiCommentRemoveView></ApiCommentRemoveView>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default routes
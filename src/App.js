import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home, { homeLoader } from './pages/Home';
import Post, { postLoader } from './pages/Post';
import CreatePost, { createPostAction } from './pages/CreatePost';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'posts/:postId',
        element: <Post />,
        loader: postLoader,
      },
      {
        path: 'create-post',
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

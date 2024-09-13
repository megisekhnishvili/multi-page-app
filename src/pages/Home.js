import { Link, useLoaderData } from 'react-router-dom';

export const homeLoader = async () => {
  const response = await fetch('/api/posts');
  const posts = await response.json();
  return posts;
};

const Home = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

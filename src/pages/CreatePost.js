import { Form, redirect } from 'react-router-dom';

export const createPostAction = async ({ request }) => {
  const formData = await request.formData();
  const newPost = {
    title: formData.get('title'),
    body: formData.get('body')
  };

  await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost)
  });

  return redirect('/');
};

const CreatePost = () => {
  return (
    <div>
      <h1>Create a New Post</h1>
      <Form method="post">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Body:
          <textarea name="body"></textarea>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default CreatePost;

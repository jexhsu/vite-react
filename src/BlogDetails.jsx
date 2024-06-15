import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:3001/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3001/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

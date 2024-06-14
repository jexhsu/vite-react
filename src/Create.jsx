import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const handleSumit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    });
  };

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSumit}>
        <label>Blog title:</label>
        <input
          type='text'
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body:</label>
        <textarea
          placeholder='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {isPending && <button disabled>Adding blog...</button>}
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default Create;

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <div className='not-found'>
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <Link
          to='/'
          className='back-link'
        >
          Back to the homepage...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

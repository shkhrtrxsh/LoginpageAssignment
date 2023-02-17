import React, { useState, useEffect, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import './homepage.css'

const HomePage = () => {
    const{username}=useContext(UserContext);
    const{password}=useContext(UserContext);
    console.log(password)
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadBlogs = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs((prevBlogs) => [...prevBlogs, ...data]);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadBlogs();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h2>USERNAME: {username} <br></br> PASSWORD:  {password}</h2>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div className='ho' key={blog.id}>
            <div className="blog" >
                <h2 className='hi'>{blog.title}</h2>
            <img src={`https://picsum.photos/300/200?random=${blog.id}`} alt="blog image" />
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;


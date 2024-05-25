import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setLoading] = useState([]);
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8080/books/${id}`)
    .then((response) => {
        setBook(response.data);
        console.log(book)
        setLoading(false);
    })
    .catch((error) => {
        console.log(error);
    })
}, [])

const handleDeleteBook = () => {
  axios.delete(`http://localhost:8080/books/${id}`)
  .then(() => {
    navigate('/');
  })
  .catch((error) => {
    console.log(error);
  })
}

return (
  <div className='p-4'>
      <div className='isolate bg-white px-8 py-8'>
          <BackButton />
          <h1 className='text-3xl my-4'>Book Details</h1>
          {loading ? (
              <Spinner />
          ) : (
              <div className='flex flex-col justify-between items-start mx-auto my-2 mt-30 max-w-xl sm:mt-20'>
                  <div className='my-4'>
                      <span className='text-l mr-4 text-gray-500'>Id</span>
                      <span>{book._id}</span>
                  </div>
                  <div className='my-4'>
                      <span className='text-l mr-4 text-gray-500'>Title</span>
                      <span>{book.title}</span>
                  </div>
                  <div className='my-4'>
                      <span className='text-l mr-4 text-gray-500'>Author</span>
                      <span>{book.author}</span>
                  </div>
                  <div className='my-4'>
                      <span className='text-l mr-4 text-gray-500'>Publish Year</span>
                      <span>{book.publishYear}</span>
                  </div>
                  <div className="mt-10">
              <button
                onClick={handleDeleteBook}
                className="block w-full rounded-md border-2 border-sky-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:outline-sky-500 hover:border-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
            </div>
              </div>
          )}
      </div>
  </div>
)
}
export default DeleteBook
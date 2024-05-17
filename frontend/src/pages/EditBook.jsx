import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const EditBook = () => {
  const [loading, setLoading] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [publishYear, setPublishYear] = useState([]);
  const [book, setBook] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://127.0.0.1:5555/books/${id}`)
    .then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
      console.log(book)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const handleEditBook = () => {

    setLoading(true);
    const bookToEdit = {
      title,
      author,
      publishYear,
    }

    console.log(bookToEdit)

    axios
      .put(`http://localhost:5555/books/${id}`, bookToEdit)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        alert("Error updating the book details!");
        console.log(error);
      })

  }

  return (
    <div className='p-1'>
      <div className='isolate bg-white px-10 py-10'>
        <BackButton />
        <h1 className='text-3xl my-2'>Edit A Book</h1>
        {loading ? (
              <Spinner />
          ) : (
        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Book Title</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoComplete="title"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="author" className="block text-sm font-semibold leading-6 text-gray-900">Book Author</label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  autoComplete="author"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="publishYear" className="block text-sm font-semibold leading-6 text-gray-900">Year Published</label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="publishYear"
                  id="publishYear"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                  autoComplete="publishYear"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div className="mt-10">
              <button
                onClick={handleEditBook}
                className="block w-full border-2 border-sky-500 outline-sky-600 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:outline-sky-600 hover:border-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Edit</button>
            </div>
          </div>
        </div>
          )}
      </div>
    </div>
  )
}

export default EditBook
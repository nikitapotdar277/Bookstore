import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [publishYear, setPublishYear] = useState([]);
    const [loading, setLoading] = useState([]);
    const navigate = useNavigate();
    const handleSaveBook = () => {
        const newBook = {
            title,
            author,
            publishYear,
        };
        setLoading(true)
        axios
        .post('http://localhost:5555/books', newBook)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) => {
            alert("An error occurred. Book not created!");
            console.log(error);
        })
    };

    return (
        <div className='p-1'>
            <div className='isolate bg-white px-10 py-10'>
                <BackButton />
                <h1 className='text-3xl my-2'>Create New Book</h1>
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Book Title</label>
                            <div className="mt-2.5">
                                <input 
                                type="text" 
                                name="title" 
                                id="title"
                                value = {title}
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
                                value = {author}
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
                                value = {publishYear}
                                onChange={(e) => setPublishYear(e.target.value)}  
                                autoComplete="publishYear" 
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="mt-10">
                            <button 
                            onClick={handleSaveBook} 
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook
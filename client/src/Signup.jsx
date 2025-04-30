import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signup() {

 // const backendUrl = import.meta.env.BACKEND_URL

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('https://quote-generator-backend-ashy.vercel.app/register', formData).then((res)=>{
      console.log(res.data)



      navigate('/login')


    }).catch(err => console.log(err))
  }

  let handleChange= (e)=>{
    let inputName = e.target.name
    let inputValue = e.target.value 

    let oldData = {...formData}

    oldData[inputName] = inputValue
    setFormData(oldData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Sign Up
        </h2>
        <form  onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
         <div className='mt-4 '>
         <p className='mb-3'>Already Have an Account?</p>
          <Link to="/login"
            type="submit"
            className="block text-center w-full bg-blue-100  py-2 rounded-xl hover:bg-blue-300 transition duration-300"
          >
            Login
          </Link>
         </div>
        
      </div>
    </div>
  )
}

export default Signup

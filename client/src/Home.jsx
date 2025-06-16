
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=' bg-violet-300  bg-opacity-20  min-h-screen'>
    <div className=' mt-10 ml-20 flex items-center  p-3 '>
      <div className='flex  '>
        <h2 className='font-bold text-xl'>Quotes</h2>
      </div>

      <div className='absolute right-10 mr-10 flex items-center gap-x-8'>
        <Link to="/login" className='bg-slate-300  py-2 px-4 rounded-xl hover:bg-slate-400 transition duration-250'>Login </Link>
        <Link  to="/register" className='bg-slate-900 text-white py-2 px-4 rounded-xl hover:bg-slate-800 transition duration-200'>Signup</Link>
      </div>

      
        
      
    </div>


    <h1 className='block text-center font-bold mx-36 text-7xl tracking-tight order-1 mt-44'>Quote Generator </h1>
    <p className='text-center mt-4 font-semibold'>Find the best quote for you...</p>

    <div className='flex justify-center mt-24'>
    <Link to="/quote" >
    <button className=' bg-violet-600 text-white px-2 py-1 flex justify-center rounded-lg mt-4 hover:bg-violet-700'>Generate Quote</button>
    </Link>
    </div>
    </div>
  )
}

export default Home


import React, { useState } from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BsDashLg } from "react-icons/bs";
import axios from 'axios';
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function Quote() {
    const [quote, setQuote]= useState('')
    const getQuote = ()=>{
        axios.get("http://localhost:2000/quote").then((res)=>
           setQuote(res.data)
        ).catch(err => console.log(err))

        
    }
   
    

  return (
    <div className='flex items-center justify-center bg-violet-300  bg-opacity-20  min-h-screen'>
        <div className=' bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>
            <h2 className=' block text-center text-2xl font-bold  mb-10'>Quote of the day</h2>


            {(quote.length === 0)? 
            <div className=' mt-24'>
                <hr/>
                <div className='flex justify-end'>
                 <button onClick={getQuote} className=' bg-violet-600 text-white px-2 py-1 rounded-lg mt-4 hover:bg-violet-700'>Generate Quote</button>
                 </div>
            </div> : 
            
            
            <div>
                 <div className='flex  gap-2'>
                    <ImQuotesLeft />  {quote.text}
                    <ImQuotesRight className=''/>
                    </div>

                    <div className='flex font-semibold justify-end items-center gap-1 mt-4 mb-2'><BsDashLg />{quote.author}</div>
                    <hr/>
                    <div className='flex justify-between items-center'>
                        <HiOutlineSpeakerWave className='size-8 mt-6' />
                        <button onClick={getQuote} className=' bg-violet-600 text-white px-2 py-1 rounded-lg mt-4 hover:bg-violet-700'>New Quote</button>
                    </div>

                
            </div> }

           
                
            

           
        </div>
    </div>
  )
}

export default Quote
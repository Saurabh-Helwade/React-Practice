import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    //passing objects into array :- 
    // const [data ,setData] = useState([])

    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setData(data)
    // })
      
    // }, [])
    
  return (
    <div className='text-center m-5 bg-gray-500 text-white pd-4 text-3xl'>
      Github Followers :- {data.followers}
      <img  src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
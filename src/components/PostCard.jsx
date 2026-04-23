import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
  console.log("featuredimage ID:", featuredimage)
    console.log("preview URL:", appwriteService.getFileView(featuredimage))

    
  return (
    <Link to={`/post/${$id}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
            <div className='w-full h-48 overflow-hidden'>
                <img src={appwriteService.getFileView(featuredimage).toString()} alt={title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300" />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
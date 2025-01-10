'use client'

import React from 'react'
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
        {data.map((post) => (
            <PromptCard
                key={post._id}
                post={post}
                handleTagClick={handleTagClick}
            />
        ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }
  useEffect(() => {
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt")
        const data = await response.json()
        setPosts(data)
    }
    fetchPosts()
  }, [])
  return (
    <section>
        <form className='relative w-full flex-center flex-col'>
            <input 
                type='text' 
                placeholder='Search for prompts, tag or username' 
                className='search_input' 
                value={searchText}
                onChange={handleSearchChange}
                required
            />
            <PromptCardList 
                data={posts}
                handleTagClick={()=>{}}
            />

        </form>
    </section>
  )
}

export default Feed
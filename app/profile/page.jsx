'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Profile from '@/components/Profile'
const MyProfile = () => {
    const {data: sessesion} = useSession()
    const [posts, setPosts] = useState([])
    
    const handleEdit = () => {
        console.log('Edit')
    }

    const handleDelete = () => {
        console.log('Delete')
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${sessesion?.user.id}/posts`)
            console.log("response from ftech poss", response)
            const data = await response.json()
            setPosts(data)
        }
        console.log("session from my profile", sessesion)
        if(sessesion?.user.id){
            fetchPosts()
        }
    }, [])
  return (
    <Profile
        name="My"
        desc="Welcome to your profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile
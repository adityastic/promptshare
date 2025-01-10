'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
    const isUserLoggedIn = true
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' width={50} height={50} className='object-contain' alt='logo'/>
            <p className='logo_text'>PromptShare</p>
        </Link>
        {isUserLoggedIn && (
            <div className='flex gap-3'>
                <Link href='/create-prompt' className='black_btn'>Create Prompt</Link>
                <button className='outline_btn' onClick={signOut}>Sign Out</button>
            </div>
        )}
        {!isUserLoggedIn && (
            <div className='flex gap-3'>
                <button className='black_btn' onClick={signIn}>Sign In</button>
            </div>
        )} 
    </nav>
  )
}

export default Nav
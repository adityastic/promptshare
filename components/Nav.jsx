'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);

    const isUserLoggedIn = true
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' width={50} height={50} className='object-contain' alt='logo'/>
            <p className='logo_text'>PromptShare</p>
        </Link>
        {/* desktop navigation */}
        <div className='hidden sm:flex'>
        {isUserLoggedIn ? (
            <div className='flex gap-3'>
                <Link href='/create-prompt' className='black_btn'>Create Prompt</Link>
                <button className='outline_btn' onClick={signOut}>Sign Out</button>
                <Link href='/profile'>
                    <Image src='/assets/images/logo.svg' width={30} height={30} className='rounded-full' alt='profile'/>
                </Link>
            </div>
        ) :
        (
            <div className='flex gap-3'>
                {providers && Object.values(providers).map((provider) => (
                    <button className='black_btn' key={provider.name} onClick={() => signIn(provider.id)}>
                        Sign In with {provider.name}
                    </button>
                ))}
            </div>
        )}
        </div>
        {/* mobile navigation */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image src='/assets/images/logo.svg' width={30} height={30} className='rounded-full' alt='profile' onClick={()=> setToggleDropdown((prev)=>!prev)}/>
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link href='/profile' className='dropdown_link' onClick={()=> setToggleDropdown(false)}>
                                My Profile
                            </Link>
                            <Link href='/create-prompt' className='dropdown_link' onClick={()=> setToggleDropdown(false)}>
                                Create Prompt
                            </Link>
                            <button className='outline_btn mt-5 w-full black_btn' onClick={()=>{
                                setToggleDropdown(false)
                                signOut()
                            }}>Sign Out</button>
                        </div>
                    )}
                    <button className='outline_btn' onClick={signOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    {providers && Object.values(providers).map((provider) => (
                        <button className='black_btn' key={provider.name} onClick={() => signIn(provider.id)}>
                            Sign In with {provider.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    </nav>
  )
}

export default Nav
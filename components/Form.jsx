import React from 'react'
import Link from 'next/link'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
            <span className='blue_gradient'>{type} Post</span>
        </h1>
        <p classname='desc text-left max-w-md'>
            {type} a prompt and share it with the world! AI is here to stay xD
        </p>
        <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
            <label>
                <span className='font-sans font-semibold text-base text-gray-700'>
                    Your Prompt
                </span>
                <textarea
                    value={post.prompt}
                    onChange={(e)=> setPost({...post, prompt: e.target.value})}
                    className='form_textarea'
                    placeholder='Write your prompt here'
                    required
                />
            </label>
            <label>
                <span className='font-sans font-semibold text-base text-gray-700'>
                    Tag { ` `}
                    <span>(#product, #ai, #productivity)</span>
                </span>
                <input
                    value={post.tag}
                    onChange={(e)=> setPost({...post, tag: e.target.value})}
                    className='form_input'
                    placeholder='#tag'
                    required
                />
            </label>
            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href='/' className='text-gray-500 text-sm'>
                    Cancel
                </Link>
                <button
                    type='submit'
                    className='px-5 py-1.5 bg-primary-orange text-white rounded-full'
                    disabled={submitting}
                >
                    {submitting ? `${type}..` : type}
                </button>
            </div>
            </form>
    </section>
  )
}

export default Form
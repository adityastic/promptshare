import React from "react"
import Feed from "@/components/Feed"
const Home = () => {
  return (
    <section className="w-full float-center flex-col">
        <h1 className="head_text text-center">
            Welcome to PromptShare
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">Share your prompts with the world</span>
        </h1>
        <p className="desc text-center">
            PromptShare is an open-source platform that allows you to share your prompts with the world.
        </p>
        <Feed />
    </section>
  )
}

export default Home
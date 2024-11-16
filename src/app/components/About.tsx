import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id="About">
      <section className="bg-green-50 text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={require("../../../public/assests/Picture/profile pic.png")}
        width={300}
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        
        <br className="hidden lg:inline-block" />
       About Me
      </h1>
      <p className="mb-5 leading-relaxed">
       Phone No:03XXXXXXXX

       mehwishshakeel201@gmail.com
      </p>
      <p className="mb-5 leading-relaxed">
      I am Mehwish Shakeel. I have done Masters in mathematics from Karachi university and done B.sc from Karchi 
      University as well.By profession I am a mathematics teacher in well reported school and currently doing Generative 
      AI course from Governor House Program.
      </p>
      <div className="flex justify-center">
        <a href={"/assests/CV/new cv.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
       View CV
        </button>
        </a>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="Project">
      <section className=" bg-blue-100 text-gray-600 body-font">
  <div className=" container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       My Projects
      </h1>
      
    </div>
    <div className=" justify-center flex flex-wrap -m-5 -mt-[5rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/project/Screenshot (39).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            Resume Builder Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Resume Builder
            </h1>
            <p className="leading-relaxed">
            I have developed an interactive HTML/CSS resume builder that empowers individuals to create visually appealing and professional resumes.
             This user-friendly tool allows users to customize their resumes with ease, ensuring they make a strong first impression in their job applications.
            </p>
            <Link target='_blank' href={"https://vercel.com/mehwish-shakeels-projects"} >
            <p className="leading-relaxed text-indigo-500 mb-1 hover:underline">View project..!</p>
            </Link>
          </div>
        </div>
      </div>
     </div>
     
  </div>
</section>

    </div>
  )
}

export default Project

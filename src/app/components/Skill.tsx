import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { FaCheckDouble } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
const Skill = () => {
  return (
    <div id="Skills">
      <section className=" bg-green-50 text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
      Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
             <CiSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            HTML, or HyperText Markup Language, is the foundation of web pages.
             It defines the structure and content of a webpage, using tags to specify headings,
              paragraphs, images, links, and other elements.
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaCheckDouble />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            CSS, or Cascading Style Sheets, is used to style HTML elements. It controls the layout,
             colors, fonts, and overall appearance of a webpage.
             By separating styles from HTML, CSS makes web development more efficient and maintainable.
            </p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-pink-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <FaCheckCircle />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            TypeScript, a superset of JavaScript, adds optional static typing to JavaScript code.
            This allows for early error detection, improved code readability, and better tooling support,
              making it a popular choice for large-scale web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill

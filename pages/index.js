import Head from 'next/head';
import {AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from "next/image";
import me from "../public/me.jpeg";
import tetris from "../public/tetris.png"
import altera from "../public/altera.jpg"
import qlabs from "../public/qlabs.png"


export default function Home() {
  return (
    <div className=' scroll-smooth overflow-x-hidden'>
      <Head>
        <title>matthew cheung</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="home" className="bg-white px-10">
        <section className='pt-[140px] pb-[160px] -ml-10 w-screen bg-gradient-to-r from-[#ef6543] to-[#7a8cff] relative top-[72px] left-0 '>

          <nav className="bg-white py-2.5 fixed w-screen -top-1 border-b border-gray-200 backdrop-filter backdrop-blur-md bg-opacity-20">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <div className="flex order-2">
                <ul className="flex flex-row p-4 px-7 mt-0 space-x-8 text-[15px] font-medium">
                  <li>
                    <a href="#home" className="block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700">Home</a>
                  </li>
                  <li>
                    <a href="#about-me" className="block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700">About Me</a>
                  </li>
                  <li>
                    <a href="#projects" className="block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700">Projects</a>
                  </li>
                </ul>
                  
                <button type="button" className="text-white bg-[#b9779a] border-2 border-[#b9779a] hover:bg-transparent hover:text-black hover:border-black ease-in-out duration-300 rounded-lg font-medium text-[15px] px-2.5 h-9 mr-3 mt-[9.3px] text-center">
                Resume
                </button>

              </div>

              <div className="items-center justify-between flex w-auto order-1" id="navbar-sticky">
                <ul className="flex flex-row text-md font-small">
                  <li>
                    <a href="#home" className="block mt-[3px] py-2 pr-4 text-[13px] text-gray-700 rounded md:p-0 ">Matthew Cheung · Sotware Engineering @ McMaster University</a>
                  </li>
                </ul>
              </div>

            </div>
          </nav>

          <div className='text-center py-10'>
            <div className='inline-block text-left'>
              <h2 className='text-[85px] py-2 text-white font-bold'>
              hi, i'm Matthew Cheung
              </h2>
              <h3 className='text-2xl -mt-[13px] mb-[20px] text-white '>a Software Engineering student at McMasterU.</h3>
              
              <button href="" type="button" className="text-black bg-white hover:bg-transparent hover:text-white border-2 border-white ease-in-out duration-300 shadow-lg font-medium rounded-md text-xl py-3 px-[60px]">
                click to view my resume
              </button>
            </div> 
          </div>
          
        </section>
        
        <section>
          <div className='pt-[260px] pb-[30px]'>
            <div className='max-w-[1000px] mx-auto grid grid-cols-2'>

              <Image className='w-[380px] mx-auto my-auto rounded-full'src={me} /> 
              
              <div className=' shadow-xl px-5 flex flex-col justify-center'>
                <h3 className='text-3xl py-5 underline decoration-[4px] decoration-[#b9779a] font-bold'>
                <a id="about-me" className='absolute top-[630px]'></a>
                  About me</h3>
                
                <p className='text-lg py-2 leading-8 text-gray-800 '>
                  I'm a second year software engineering student @ McMaster university, 
                  currently <span className=' text-indigo-400'>looking for Summer 2023 internships. </span>
                  In the past I've worked at Code Ninjas as a Coding instructor, and have developed
                  projects such as a Tetris AI, and advanced logic systems in Quartus. 
                </p>

                <p className='text-lg py-2 leading-8 text-gray-800'>
                  My current goals are ambitious, and I hope to develop my skills and work on 
                  intricate and expansive projects in the future.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='py-64 px-4'>
          <h3 className='flex justify-center text-3xl pb-[50px] underline decoration-[4px] decoration-[#b9779a] font-bold'>My Projects</h3>
            
            <div className='max-w-[1100px] mx-auto grid grid-cols-3 place-items-center'>
              <a id="projects" className='absolute top-[1470px]'></a>
              <a className="max-w-[260px] rounded-xl overflow-hidden shadow-lg transition duration-[200ms] hover:scale-105 hover:shadow-2xl"
              href="https://github.com/matthewcheung26/tetrisAI" target="_blank">
                <Image className="w-auto" src={tetris}/> 
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Tetris AI</div>
                  <p className="text-gray-700 text-[15px]">
                  Developed the game tetris from scratch using Python and Pygame. Implemented an AI manually, but I am working on creating a genetic evolutionary algorithm to teach the AI.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Python</span>
                  <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Pygame</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Git</span>
                </div>
              </a>

              <a className="max-w-[260px] rounded-xl overflow-hidden shadow-lg transition duration-[200ms] hover:scale-105 hover:shadow-2xl"
              href="https://github.com/matthewcheung26/tetrisAI" target="_blank">
                <Image className="w-auto" src={altera}/> 
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Digital Logic Design</div>
                  <p className="text-gray-700 text-[15px]">
                    Designed logic systems using Intel's DE1-SoC Board with Verilog, including 4-bit adders, signal taps, and ALUs. 
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Verilog</span>
                  <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Quartus Simulations</span>
                  <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Altera Software/Hardware</span>
                </div>
              </a>

              <a className="max-w-[260px] rounded-xl overflow-hidden shadow-lg transition duration-[200ms] hover:scale-105 hover:shadow-2xl"
              href="https://www.notion.so/matthewcheung26/Project-2-Summary-daa0b67043a74b77bc604b45e5a252cb" target="_blank">
                <Image className="w-auto" src={qlabs}/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Robotics Simulations</div>
                  <p className="text-gray-700 text-[15px]">
                    Used Quanser Framework to program a Quanser Arm, sorting and moving a random object to it's respective contatiner. Used to simulate a recycling system.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Python</span>
                  <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Quanser Labs Software</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Git</span>
                </div>
              </a>

            </div>
          </div>
        </section>

        <section>
          <div className="w-screen px-4 py-20 -ml-10 space-y-12 overflow-hidden bg-gradient-to-r from-orange-400 to-indigo-400">
            <div className="text-[70px] text-white flex justify-center mt-8 gap-16">
              <a href="https://www.linkedin.com/in/mcheung26/" target="_blank"><AiFillLinkedin /></a>
              
              <a href="https://github.com/matthewcheung26" target="_blank"><AiFillGithub /></a>
              <a href="mailto: cheunm23@mcmaster.ca" target="_blank"><AiFillMail /></a>
            </div>

            <p className="text-md leading-6 text-center text-white">
                made by matthew cheung, 2022.
            </p>

          </div>
        </section>
      </main>
    </div>
  );
}

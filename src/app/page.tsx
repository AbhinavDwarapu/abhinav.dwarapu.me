'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import ImageButton from '@/components/ImageButton'
import {useRef} from "react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <main >
      <div className="flex mx-auto justify-center items-center h-screen w-full">
        <div className='w-full max-w-7xl md:px-10 px-4'>
          <div className="md:flex sm:flex-row">
            <div className="grow md:text-left  text-center text-5xl">Hi!<br/>I&apos;m Abhinav.</div>
            <div className='grow md:text-right text-center text-2xl text-gray-500'>
              
              <div className='md:pt-0 pt-8'>
              A software developer studying <br/>
              <div className='inline text-black'>computer science</div> 
              <div className='inline'>&nbsp;at the</div><br/>
              <div className='text-black italic'> University of Leeds.</div>
              </div>
            </div>
          </div>
          <div className='flex md:w-[261px] w-full max-w-xs mx-auto md:mx-0 text-2xl text-gray-500'>
            <div className='grow pt-8 text-left'>
              
              <div className='hover:text-gray-900 transition'>
                <a href='https://instagram.com/abhinavdwarapu'>Instagram</a>
                </div>
              <div className='hover:text-gray-900 transition'>
                <a href='https://www.linkedin.com/in/abhinav-dwarapu/'>LinkedIn</a>
                </div>
              <button className='hover:text-gray-900 transition' onClick={handleClick}>
                Projects
                </button>
            </div>
            <div className='pt-8 text-right'>

              <div className='hover:text-gray-900 transition'>
                <a href='https://www.artstation.com/abhinavd'>Art</a>
              </div>

              <div className='hover:text-gray-900 transition'><a href='mailto:enquiries@abhinavd.aleeas.com'>Email</a></div>
              <div className='hover:text-gray-900 transition'>
                <a href='https://github.com/AbhinavDwarapu'>GitHub</a>
              </div>
            </div>
        
        </div>
        </div>
        
        
      </div>
      <div ref={scrollRef} className="max-w-7xl md:px-14 px-8 mx-auto md:h-screen flex justify-center items-center flex-col">
            {/* Section 1*/}
            <div className="flex flex-col md:flex-row md:my-4 mt-24">
                {/* Title and Description */}
                <div className="flex flex-col w-full">
                    <div className="md:text-5xl text-4xl md:text-left text-center">InSynth</div>
                    <div className="py-8 md:py-12 text-3xl text-gray-500 md:text-left text-center">A MIDI controllable web synthesizer with customisable effects.</div>
                </div>
                {/* ImageButton */}
                <div className="w-full md:pl-16">
                    <ImageButton source="/InSynthImage.png" link="https://in-synth.vercel.app/" text="InSynth"/>
                </div>
            </div>

            {/* Section 2*/}
            <div className="flex flex-col md:flex-row md:my-4 my-24">
                {/* Title and Description */}
                <div className="flex flex-col w-full">
                    <div className="md:text-5xl text-4xl md:text-left text-center">TaskPlanner</div>
                    <div className="py-8 md:py-12 text-3xl text-gray-500 md:text-left text-center">A simple task planning application with a work and break timer.</div>
                </div>
                {/* ImageButton */}
                <div className="w-full md:pl-16">
                    <ImageButton source="/TaskPlannerImage.png" link="https://taskplanning.netlify.app/" text="TaskPlanner"/>
                </div>
            </div>
        </div>  
    </main>
  )
}

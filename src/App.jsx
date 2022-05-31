import './App.css'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import HardSkillCard from './components/HardSkillCard'
import HardSkillItem from './components/HardSkillItem'

import ProjectCard from './components/ProjectCard'

function App() {

  return (  
    <main className='bg-gray-100'>
      <div className='mx-auto max-w-screen-lg grid grid-cols-3 py-12 gap-x-4'>

        <aside className='col-span-1 pt-4'>
          {/* Profile Card */}
          <div className='bg-white rounded-md ml-4 px-4 py-4 shadow-md'>
            {/* Avatar Image */}
            <div className='h-64 bg-gray-300 rounded'></div>

            <h4 className='mt-4 text-gray-800 text-xl font-medium'>Titosy Manankasina</h4>
            <h5 className='text-gray-600'>Front-End Developer</h5>

            <div className='flex mt-4 space-x-3 items-center'>
              <MailIcon className='h-5 w-5 text-gray-500' />
              <span className='text-xs text-gray-600'>dev.titosy@gmail.com</span>
            </div>

            <div className='flex space-x-3 mt-2 items-center'>
              <PhoneIcon className='h-5 w-5 text-gray-500' />
              <span className='text-xs text-gray-600'>+261 34 52 322 74</span>
            </div>

            <p className='text-xs text-gray-600 mt-4 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum assumenda deserunt quo natus? Dignissimos velit ab provident labore, non ratione.</p>
          </div>

        </aside>
        
        <div className='grid grid-cols-2 col-span-2 pt-4 gap-x-4 gap-y-4'>
          {/* Front-End */}
          <HardSkillCard title='Front-End'>
            <HardSkillItem name='HTML' level='90%' />
            <HardSkillItem name='CSS' level='90%' />
            <HardSkillItem name='Flutter' level='90%' />
            <HardSkillItem name='Tailwind' level='90%' />
            <HardSkillItem name='Bootstrap' level='90%' />
          </HardSkillCard>
          

          <HardSkillCard title='Back-End'>
            <HardSkillItem name='Nodejs' level='90%' />
            <HardSkillItem name='Express' level='90%' />
            <HardSkillItem name='MongoDB' level='90%' />
          </HardSkillCard>

          
          <HardSkillCard title='Design'>
            <HardSkillItem name='Figma' level='90%' />
            <HardSkillItem name='Adobe XD' level='90%' />
          </HardSkillCard>


          {/* Projects */}
          <div className='col-span-2 space-y-4 mt-8'>
            <div className='px-4 py-6 bg-white rounded-md shadow-md'>
              <h4 className='font-medium'>Projects (03)</h4>
            </div>

            <ProjectCard title='Project 1'/>
            <ProjectCard title='Project 2'/>
            <ProjectCard title='Project 3'/>
          </div>

          {/* Blogs */}
          <div className='col-span-2 space-y-4 mt-8'>
            <div className='px-4 py-6 bg-white rounded-md shadow-md'>
              <h4 className='font-medium'>Blogs (01)</h4>
            </div>

            <div className='flex flex-row-reverse rounded-md shadow-md'>
              <div className='bg-gray-300 h-72 w-80 rounded-tr-md rounded-tb-md'></div>
              <div className='flex flex-col flex-1 p-4'>
                <div className='flex space-x-4 text-gray-600'>
                  <span>#Design</span>
                </div>

                <div className='space-y-2 mt-4'>
                    <h2 className='text-xl font-medium text-gray-700'>How to organize your CSS</h2>
                    <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo facilis aspernatur possimus qui repellendus perspiciatis laborum. Itaque eaque et dolore sunt possimus sit a necessitatibus?</p>
                </div>

                <div className='mt-10'>
                    <a href="#" className='text-xs text-gray-100 px-6 py-3 bg-gray-800 hover:bg-gray-600'>Read More</a>
                </div>

                <span className='text-xs text-gray-600 mt-6'>titoo.dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className='flex justify-center items-center h-20'>
        <p className='text-sm text-gray-600'>Created by <span>Titosy</span> - github.com/titoo-dev</p>
      </footer>
    </main>
  )
}

export default App

export default function ProjectCard({ title, children }) {
    return (
        <div className='p-4 flex bg-white rounded-md shadow-md'>
            <div className='w-56 h-48 rounded bg-gray-300'></div>
            <div className='flex-1 flex flex-col px-4 space-y-4'>
                <div className='flex space-x-4 text-gray-600'>
                    <span>#html</span>
                    <span>#css</span>
                    <span>#responsive</span>
                </div>

                <div className='space-y-2'>
                    <h2 className='text-xl font-medium text-gray-700'>{ title }</h2>
                    <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo facilis aspernatur possimus qui repellendus perspiciatis laborum. Itaque eaque et dolore sunt possimus sit a necessitatibus?</p>
                </div>

                <div className='flex space-x-4'>
                    <a href="#" className='text-xs text-gray-100 px-6 py-3 bg-gray-800 hover:bg-gray-600'>view demo</a>
                    <a href="#" className='text-xs text-gray-800 px-6 py-3 border border-gray-800'>view source code</a>
                </div>

            </div>
        </div>
    )
}
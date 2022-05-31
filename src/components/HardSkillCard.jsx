export default function HardSkillCard({ title, children }) {
    return (
        <div className='col-span-1'>
            
            <div className='p-4 bg-white rounded-md shadow-md space-y-2'>
              <h4 className='font-medium uppercase'>{ title }</h4>
              <div>
                  { children } 
              </div>
            </div>
          
        </div>
    )
}
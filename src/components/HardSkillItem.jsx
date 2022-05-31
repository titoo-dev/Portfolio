export default function HardSkillItem({ name, level }) {
    return (
        <div className='grid grid-cols-3'>
            <div className='text-gray-600 text-sm col-span-1 py-2 capitalize'>{ name }</div>
            <div className='flex items-center col-span-2 py-2'>
                <div className='h-2 w-full rounded-full bg-gray-300'></div>
            </div>
        </div>
    )
}
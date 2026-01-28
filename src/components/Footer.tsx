import { Atom } from 'lucide-react'
export const Footer = () => {
    return (
        <div className='w-full'>
            <div className='container px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Atom size={24} />
                        <span className='text-xl font-bold'>Physic</span>
                    </div>
                    <div className='flex items-center gap-2'>
                    </div>
                </div>
            </div>
        </div>
    )
}       
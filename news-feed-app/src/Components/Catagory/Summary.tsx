import React from 'react'
import CatagoryIcon from '../../Assets/images/surf.svg'
import { IoIosArrowForward } from "react-icons/io";

const Summary: React.FC = () => {
    return (
        <summary className='flex items-center h-12 px-4'>
            <div className='flex items-center'>
                <picture className='shadow-lg rounded-full h-8 w-8 p-1 flex justify-center items-center mr-2'>
                    <img src={CatagoryIcon} alt="Catagory Icon" className='w-4/5' />
                </picture>
                <h2 className='text-catagoryHd font-bold uppercase text-sm'>Catagory</h2>
            </div>
            <IoIosArrowForward className="ml-auto" />
        </summary>
    )
}

export default Summary

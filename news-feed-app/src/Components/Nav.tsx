import React from 'react'
import { AiOutlineInbox, AiOutlineSetting, AiOutlineFileSearch } from "react-icons/ai";
import Search from './Search';

const Nav: React.FC = () => {
    return (
        <nav >
            <section className='flex justify-between text-heading mb-8'>
                <AiOutlineInbox className="" />
                <h1 className='text-sm font-semibold'>NewsBox</h1>
                <AiOutlineSetting className="" />
            </section>
            <Search />
        </nav>
    )
}

export default Nav

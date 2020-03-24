import React from 'react'
import { AiOutlineInbox, AiOutlineSetting, AiOutlineFileSearch } from "react-icons/ai";
import Search from './Search';

const Header = () => {
    return (
        <header>
            <nav >
                <section className='flex justify-between text-heading mb-10'>
                    <AiOutlineInbox className="" />
                    <h1 className='text-sm font-semibold'>NewsBox</h1>
                    <AiOutlineSetting className="" />
                </section>
                <Search />
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
import { AiOutlineInbox, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Search from './Search';
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";

const Nav: React.FC = () => {
    let match = useLocation()
    let title = match.pathname.replace('/', "")

    return (
        <nav >
            <section className='flex justify-between items-center text-heading'>
                {
                    title === ""
                        ? <Link to="/archive"><AiOutlineInbox className="" /></Link>
                        : <Link to="/"><MdKeyboardArrowLeft className="" /></Link>
                }
                <h1 className='text-sm font-semibold'>
                    {title === "" ? 'Newsletter' : title}
                </h1>
                <Link to="/settings"><AiOutlineMenuUnfold className="" /></Link>
            </section>
            {title !== 'settings' &&
                <Search />
            }
        </nav>
    )
}

export default Nav

import React from 'react'
import { AiOutlineInbox, AiOutlineSetting, AiOutlineMenuUnfold } from "react-icons/ai";
import Search from './Search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <nav >
            <section className='flex justify-between text-heading mb-8'>
                <Link to="/archive">    <AiOutlineInbox className="" /></Link>
                <Link to="/">  <h1 className='text-sm font-semibold'>NewsBox</h1></Link>
                <Link to="/settings">    <AiOutlineMenuUnfold className="" /></Link>
            </section>
            <Search />
        </nav>
    )
}

export default Nav

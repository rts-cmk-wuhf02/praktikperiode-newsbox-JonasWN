import React from 'react'
import { GiSelfLove } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { AiOutlineToTop } from 'react-icons/ai';
import { IoIosRefresh } from 'react-icons/io';
import { WiMoonrise } from "react-icons/wi";
import { MdFilterBAndW } from "react-icons/md";
import Theme from './Theme';

const Footer: React.FC = () => {

    const handleClick = (e: any) => {
        console.log(e.target)
    }
    return (
        <footer className="h-12 w-full fixed bottom-0 left-0 footer-shadow bg-primary">
            <ul className="flex h-full justify-around items-center">
                <li className="h-full w-auto flex justify-center items-center">
                    <GoHome className="text-2xl text-footer" />
                </li>
                <li className="h-full w-auto flex justify-center items-center">
                    <AiOutlineToTop className="text-2xl text-catagoryHd" />
                </li>
                <li className="bg-catagoryHd footer-btn mb-12 bg-btn-delete rounded-full flex justify-center items-center">
                    <IoIosRefresh className="text-2xl text-primary" />
                </li>
                <Theme />
                <li className="h-full w-auto flex justify-center items-center"  >
                    <MdFilterBAndW className="text-2xl text-catagoryHd" />
                </li>
            </ul>
        </footer>
    )
}

export default Footer

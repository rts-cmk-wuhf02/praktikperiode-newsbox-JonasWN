import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'

const Search = () => {
    return (
        <section className="flex justify-around items-center p-2 bg-secondary rounded h-10">
            <input type="text" placeholder="Search News" className="bg-secondary text-xs text-font placeholder-font" />
            <AiOutlineFileSearch className="text-font" />
        </section>
    )
}

export default Search

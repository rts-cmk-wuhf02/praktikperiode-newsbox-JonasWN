import React from 'react'
import Nav from './Nav'

const Header: React.FC = () => {
    return (
        <header className="container font-main px-4 m-auto py-4 bg-primary box-border" >
            <Nav />
        </header>
    )
}

export default Header

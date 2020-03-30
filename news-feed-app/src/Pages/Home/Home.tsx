import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'

interface Props {
    articles: {
        title: string;
        checked: boolean;
    }[]
}

const Home: React.FC<Props> = ({ articles }) => {
    return (
        <main className="">
            <Catagory articles={articles} />
        </main>
    )
}

export default Home

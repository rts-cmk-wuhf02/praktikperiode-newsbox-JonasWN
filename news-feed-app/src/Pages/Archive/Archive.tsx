import React from 'react'
import Catagory from '../../Components/Catagory/Catagory'
import SavedCatagory from './SavedCatagory'

interface Props {
    savedList: any,
    articles: {
        title: string;
        checked: boolean;
        id: string;
    }[]
}

const Archive: React.FC<Props> = ({ savedList, articles }) => {
    return (
        <main className="">
            <SavedCatagory savedList={savedList} articles={articles} />
        </main>
    )
}

export default Archive

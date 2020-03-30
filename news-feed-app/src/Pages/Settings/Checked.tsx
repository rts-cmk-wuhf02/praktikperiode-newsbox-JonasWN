import React from 'react'
import Title from './Title'

interface Props {
    list: {
        title: string;
        checked: boolean;
        id: string;
    }[]
    checked: (catagory: string, state: boolean) => void,
    setState: {
        title: string;
        checked: boolean;
    }[]
}

const Checked: React.FC<Props> = ({ list, checked, setState }) => {

    return (
        <React.Fragment>
            {list.map((article) => {
                return (
                    <li className="flex justify-between items-center border-border border-b h-12 px-4" key={article.id}>
                        <Title title={article.title} checkState={checked} artChecked={article.checked} />
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default Checked

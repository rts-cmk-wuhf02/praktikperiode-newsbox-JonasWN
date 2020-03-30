import React from 'react'

interface Props {
    list: any
}

const Checked: React.FC<Props> = ({ list }) => {

    return (
        <React.Fragment>
            {list.map((article: string, index: number) => {
                return (
                    <li className="flex justify-between items-center border-border border-b h-12 px-4" key={index}>
                        <h3 className="text-catagoryHd font-bold uppercase text-sm">{article}</h3>
                        <input type="checkbox" />
                    </li>
                )
            })}
        </React.Fragment>
    )
}

export default Checked

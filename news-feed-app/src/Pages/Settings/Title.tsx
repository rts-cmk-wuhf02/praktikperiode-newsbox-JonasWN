import React, { useState } from 'react'

interface Props {
    title: string,
    checkState: (catagory: string, state: boolean) => void,
    artChecked: boolean
}

const Title: React.FC<Props> = ({ title, checkState, artChecked }) => {
    const [checked, setChecked] = useState(artChecked)

    const check = (e: any) => {
        checkState(title, !checked)
    }


    return (
        <React.Fragment>
            <h3 className="text-catagoryHd font-bold uppercase text-sm">{title + " " + checked}</h3>
            <input type="checkbox" onClick={check} checked={checked ? true : false} />
        </React.Fragment>
    )
}

export default Title

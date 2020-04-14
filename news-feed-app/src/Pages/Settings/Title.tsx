import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from "uuid";

interface Props {
    // title: string,
    checkState: (catagory: string, state: boolean) => void,
    // artChecked: boolean,
    list: {
        title: string;
        checked: boolean;
        id: string;
    }[],
    index: any
}

const Title: React.FC<Props> = ({ list, checkState, index }) => {
    const [checked, setChecked] = useState(list[index].checked)

    const id = uuidv4()

    const check = (e: any) => {
        checkState(list[index].title, !checked)
    }

    return (
        <React.Fragment>
            <h3 className="text-catagoryHd font-bold uppercase text-sm">{list[index].title}</h3>
            <input className="tgl tgl-light" type="checkbox" id={id} onClick={check} checked={checked} onChange={e => { }} />
            <label className="tgl-btn" htmlFor={id} ></label>
        </React.Fragment>
    )
}

export default Title

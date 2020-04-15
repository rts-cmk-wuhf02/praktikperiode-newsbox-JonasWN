import React, { useState, useEffect, useRef, useContext } from 'react'
import { v4 as uuidv4 } from "uuid";
import { SettingsContext } from '../../Context/SettingsContext'

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
    const [settings, setSettings, check] = useContext(SettingsContext)

    const id = uuidv4()

    return (
        <React.Fragment>
            <h3 className="text-catagoryHd font-bold uppercase text-sm">{list[index].title}</h3>
            <input className="tgl tgl-light" type="checkbox" id={id} onClick={() => check(settings[index].title, !settings[index].checked)} checked={settings[index].checked} onChange={e => { }} />
            <label className="tgl-btn" htmlFor={id} ></label>
        </React.Fragment>
    )
}

export default Title

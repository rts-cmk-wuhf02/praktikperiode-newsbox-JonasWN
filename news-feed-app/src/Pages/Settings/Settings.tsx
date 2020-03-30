import React from 'react'
import Checked from './Checked'
import Toggle from './Toggle'
interface Props {
    list: any
}

const Settings: React.FC<Props> = ({ list }) => {
    console.log(list)
    return (
        <React.Fragment>
            <main className="bg-settings settings-height px-4">
                <div className="text-center p-8 ">
                    <h2 className="text-btnAdd font-semibold text-2xl">Manage</h2>
                    <h3 className="text-sm font-normal text-catagoryHd">Catagories</h3>
                </div>
                <ul className="bg-primary rounded-lg shadow-lg">
                    <Checked list={list} />
                </ul>
                <Toggle />
            </main>
        </React.Fragment>
    )
}

export default Settings

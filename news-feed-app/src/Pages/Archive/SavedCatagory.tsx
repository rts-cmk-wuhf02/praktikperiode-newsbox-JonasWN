import React, { useState, useEffect, useContext } from 'react'
import Summary from '../../Components/Catagory/Summary'
import SavedArticle from './SavedArticle'
import { SettingsContext } from '../../Context/SettingsContext'

interface Props {

}

const SavedCatagory: React.FC<Props> = () => {
    const [settings, setSettings, check] = useContext(SettingsContext)
    const [checked, setChecked]: any = useState([])

    useEffect(() => {
        let checkList = settings.filter((article: any) => article.checked === true)
        setChecked([...checkList])
    }, [settings])

    return (
        checked.map((item: any, id: any) => {
            return (
                <React.Fragment key={item.id}>
                    {id === checked.length - 1 ?
                        <details className="border-border mb-12">
                            <Summary title={item.title} />
                            <SavedArticle catagory={item.title} />
                        </details>
                        : <details className="border-border" >
                            <Summary title={item.title} />
                            <SavedArticle catagory={item.title} />
                        </details>}
                </React.Fragment>
            )
        })
    )
}

export default SavedCatagory

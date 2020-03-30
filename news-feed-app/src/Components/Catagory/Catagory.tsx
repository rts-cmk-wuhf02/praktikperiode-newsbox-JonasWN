import React, { useEffect, useState } from 'react'
import Summary from './Summary'
import Article from './Article'
import Xml from './xml'
import Json from './json'
import useAsyncHook from './useAsyncHook'

interface Props {
    articles: {
        title: string;
        checked: boolean;
    }[]
}

const Catagory: React.FC<Props> = ({ articles }) => {
    const [checked, setChecked]: any = useState([])

    useEffect(() => {
        let checkList = articles.filter(article => article.checked === true)
        setChecked([...checkList])
    }, [articles])

    return (
        <React.Fragment>
            {checked.map((item: any) => {
                return (
                    <details className="border-border border-t" key={item.id}>
                        <Summary title={item.title} />
                        <Article title={item.title} />
                    </details>
                )
            })}
        </React.Fragment>
    )
}

export default Catagory

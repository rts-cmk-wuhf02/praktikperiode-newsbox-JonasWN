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
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml");
    const [result, loading] = useAsyncHook(query);

    useEffect(() => {
        let checkList = articles.filter(article => article.checked === true)
        setChecked([...checkList])
    }, [articles])

    console.log(checked)
    return (
        <React.Fragment>
            {checked.map((item: any) => {
                return (
                    <details className="border-border border-t" key={item.id}>
                        <Summary />
                        <Article title={item.title} />
                    </details>
                )
            })}
        </React.Fragment>
    )
}

export default Catagory

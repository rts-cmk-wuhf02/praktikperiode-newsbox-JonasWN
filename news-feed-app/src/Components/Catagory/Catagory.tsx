import React, { useEffect, useState } from 'react'
import Summary from './Summary'
import Article from './Article'
import Xml from './xml'
import Json from './json'
import useAsyncHook from './useAsyncHook'

const Catagory: React.FC = () => {
    // const [loading, setLoading] = useState(false)
    // const [result, setResult] = useState([])

    // const url = 'https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml'

    // useEffect(() => {
    //     fetchData()
    // }, [result])

    // const fetchData = async () => {
    //     try {
    //         setLoading(true)
    //         let xmltext = await Xml(url)
    //         const data: any = await Json(xmltext)
    //         console.log(data.rss.channel.item)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml");
    const [result, loading] = useAsyncHook(query);

    // console.log(result)
    // console.log(loading)
    return (
        <React.Fragment>
            <details className="border-border border-t">
                <Summary />
                <Article />
            </details>
            <details className="border-border border-t">
                <Summary />
                <Article />
            </details>
            <details className="border-border border-t">
                <Summary />
                <Article />
            </details>
            <details className="border-border border-t">
                <Summary />
                <Article />
            </details>
            <details className="border-border border-t mb-12">
                <Summary />
                <Article />
            </details>
        </React.Fragment>
    )
}

export default Catagory

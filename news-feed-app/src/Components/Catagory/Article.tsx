import React, { useState, useEffect } from 'react'
import Cover from '../../Assets/images/article.png'
import useAsyncHook from './useAsyncHook'
import { v4 as uuidv4 } from "uuid";
import Text from './Text'

interface Props {
    title: string
}

const Article: React.FC<Props> = ({ title }) => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(`https://rss.nytimes.com/services/xml/rss/nyt/${title}.xml`);
    const [result, loading]: any = useAsyncHook(query);

    return (
        <React.Fragment>
            {result.map((article: any) => {
                return (
                    <section className='h-24 py-4 border-border border-t px-4' key={uuidv4()}>
                        <Text link={article.link["#text"]} img={article["media:content"] !== undefined ? article["media:content"]["@attributes"].url : Cover} header={article.title["#text"]} description={article.description["#text"]} />
                    </section>
                )
            })}
        </React.Fragment>
    )
}

export default Article

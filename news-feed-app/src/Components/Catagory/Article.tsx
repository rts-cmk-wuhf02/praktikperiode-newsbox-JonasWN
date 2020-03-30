import React from 'react'
import Cover from '../../Assets/images/article.png'
import { AiOutlineInbox } from 'react-icons/ai'
import useAsyncHook from './useAsyncHook'
import { v4 as uuidv4 } from "uuid";

interface Props {
    title: string
}

const Article: React.FC<Props> = ({ title }) => {
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState(`https://rss.nytimes.com/services/xml/rss/nyt/${title}.xml`);
    const [result, loading]: any = useAsyncHook(query);

    return (
        <React.Fragment>
            {result.map((article: any) => {
                return (
                    <section className='flex h-24 py-4 border-border border-t px-4' key={uuidv4()}>
                        <img src={
                            article["media:content"] !== undefined ? article["media:content"]["@attributes"].url : Cover

                        } alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full" />
                        <article className='h-full leading-5'>
                            <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{article.title["#text"]}</h3>
                            <p className="line-clamp text-font font-light text-sm">{article.description["#text"]}</p>
                        </article>
                    </section>
                )
            })}
        </React.Fragment>
    )
}

export default Article

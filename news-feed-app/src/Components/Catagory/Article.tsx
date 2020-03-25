import React from 'react'
import Cover from '../../Assets/images/article.png'
import { AiOutlineInbox } from 'react-icons/ai'

const Article: React.FC = () => {
    return (
        <React.Fragment>
            <section className='flex h-24 py-4 border-border border-t px-4'>
                <img src={Cover} alt="Article Cover" className="mr-4 filter-img" />
                <article className='h-full leading-5'>
                    <h3 className="text-catagoryHd font-bold text-sm">Headline</h3>
                    <p className="line-clamp text-font font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor veniam, magnam commodi quia vero nobis corporis ipsam repudiandae dicta!</p>
                </article>
            </section>
            <section className='flex h-24 py-4 border-border border-t px-4'>
                <article className='h-full leading-5'>
                    <h3 className="text-catagoryHd font-bold text-sm">Headline</h3>
                    <p className="line-clamp text-font font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor veniam, magnam commodi quia vero nobis corporis ipsam repudiandae dicta!</p>
                </article>
                <div className="ml-10 w-checked bg-btnAdd flex justify-center items-center -m-4">
                    <AiOutlineInbox className="text-primary text-2xl " />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Article

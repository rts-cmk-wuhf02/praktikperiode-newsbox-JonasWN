import React, { useState } from 'react'
import { motion, useTransform, useSpring } from 'framer-motion'
import { AiOutlineInbox } from 'react-icons/ai'
import Lottie from 'react-lottie';
import * as animationData from '../../Animations/complete.json'


const Text = ({ link, img, header, description }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    };

    const [saved, setSaved] = useState(false)
    const x = useSpring(0, { stiffness: 600, damping: 200, })
    const width = useTransform(x, [-120, 0], [800, 0])

    async function handleDragEnd(event, info) {
        const offset = info.offset.x
        const velocity = info.velocity.x

        if (offset < -200 || velocity < -900) {

        }
        else {
            return
        }

    }
    async function handleDrag(event, info) {
        const offset = info.offset.x
        const velocity = info.velocity.x

        if (offset < -200 || velocity < -900) {
            setSaved(true)
        }
        else {
            setSaved(false)
        }

    }

    return (
        <motion.div onDrag={handleDrag} onDragEnd={handleDragEnd} style={{ x }} drag={"x"} dragConstraints={{ left: 0, right: 0 }} className="flex">
            <img src={img} alt="Article Cover" className="mr-4 filter-img object-contain w-16 rounded-full shadow-lg" />
            <article className='h-full leading-5 min-text mr-6'>
                <a href={link}> <h3 className="text-catagoryHd font-bold text-sm hd-clamp">{header}</h3></a>
                <p className="line-clamp text-font font-light text-sm">{description}</p>
            </article>
            <motion.div style={{ width }} className=" w-0 bg-btnAdd flex justify-center items-center -m-4">
                {
                    saved ? <Lottie options={defaultOptions} height={60} width={60} />
                        : <AiOutlineInbox className="text-secondary text-2xl" />
                }
            </motion.div>

        </motion.div>

    )
}

export default Text

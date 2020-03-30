import React, { useState, useEffect } from 'react'
import Xml from './xml'
import Json from './json'

function useAsyncHook(url: any) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                let xmltext = await Xml(url)
                const data: any = await Json(xmltext)
                setResult(data.rss.channel.item)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)

            }
        }
        fetchData()
    }, [url])


    return [result, loading];
}

export default useAsyncHook

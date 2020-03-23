import React from 'react'

interface Props {
    task: object,
    handleClick: () => void,
}

const Reference: React.FC<Props> = ({ task, handleClick }) => {

    /**
     * @param {string} a first value
     * @param {number} e second value as string
    */

    const test = (a: string, b: Number) => {
        return 1 + 2
    }

    test("2", 2)

    return (
        <div>

        </div>
    )
}
export default Reference

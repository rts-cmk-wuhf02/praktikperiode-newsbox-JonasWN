import React from 'react'
import Summary from './Summary'
import Article from './Article'

const Catagory: React.FC = () => {
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

import React from 'react'
import Summary from './Summary'
import Information from './Informaton'
import '../styles/Cv.scss'

const Cv = () => {
    return (
        <article className={'Container'}>
            <Summary/>
            <Information/>
        </article>
    )
}


export default Cv

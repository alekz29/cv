import React from 'react'
import '../styles/Information.scss'

const Information = () => {
    return (
        <section className={'information-container'}>
            <div className="information">
                <div className="container container--left">
                    <div className="content">
                        <h2 className={'content__data'}>PROFIL ZAWODOWY</h2>
                        <p className={'content__information content__information--big'}>Lorem ipsum..</p>
                        <p className={'content__information'}>Lorem ipsum..</p>
                        <p className={'content__information'}>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="container container--right">
                    <div className="content">
                        <h2 className={'content__data'}>LOKALIZACJA</h2>
                        <p className={'content__information content__information--big'}>Lorem ipsum..</p>
                        <p className={'content__information'}>Lorem ipsum..</p>
                        <p className={'content__information'}>Lorem ipsum..</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Information

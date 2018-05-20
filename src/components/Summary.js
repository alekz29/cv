import React from 'react'
import '../styles/Summary.scss'

const Summary = () => {
    return (
        <section className={'summary-container'}>
            <div className={'padlock'}>
            </div>
            <div className={'summary'}>
                <div className={'fit-container'}>
                    <div className={'fit'}>
                        <div role={'progressbar '} className={'fit__progress-bar fit__progress-bar--small'}>
                        </div>
                        <div role={'progressbar '} className={'fit__progress-bar fit__progress-bar--big'}>
                        </div>
                        <p className={'fit__statement'}>Aby zobaczyć dane kontaktowe kandydata, zaproś go do dalszego
                            etapu
                            rekrutacji.
                            Dane zostaną ujawnione, gdy kandydat przyjmie Twoje zaproszenie.</p>
                    </div>
                    <div className={'action'}>
                        <a className={'action__matching'}>DOPASOWANY W INNYCH PROCESACH (4)...</a>
                        <button className={'action-button'}>PRZENIEŚ</button>
                    </div>
                </div>
                <div className={'result'}>
                    <p className={'result__fit'}>DOPASOWANIE:</p>
                    <h1 className={'result__sum'}>76%</h1>
                    <button className={'result__button'}>Zaproś</button>
                </div>
            </div>
        </section>
    )
}


export default Summary
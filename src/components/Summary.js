import React from 'react'
import '../styles/Summary.scss'

const Summary = () => {
    return (
        <section className={'summary-container'}>
            <div className={'summary'}>
                <div className={'padlock'}>
                </div>
                <div className={'fit'}>
                    <div role={'progressbar'} className={'progress-bar'}>
                    </div>
                    <div role={'progressbar'} className={'progress-bar'}>
                    </div>
                    <p className={'statement'}>Aby zobaczyć dane kontaktowe kandydata, zaproś go do dalszego etapu rekrutacji.
                        Dane zostaną ujawnione, gdy kandydat przyjmie Twoje zaproszenie.</p>
                </div>
                <div className={'result'}>
                    <p className={'result__fit'}>DOPASOWANIE:</p>
                    <h1 className={'result__sum'}>76%</h1>
                </div>
            </div>
            <div className={'action'}>
                <a className={'action__matching'}>DOPASOWANY W INNYCH PROCESACH (4)...</a>
                <button className={'action__button-move'}>PRZENIEŚ</button>
                <button className={'action__button-invite'}>Zaproś</button>
            </div>
        </section>
    )
}


export default Summary
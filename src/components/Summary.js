import React from 'react'
import '../styles/Summary.scss'

const Summary = () => {
    return (
        <section className={'summary-container'}>
            <div className={'summary'}>
                <div className={'padlock'}>
                </div>
                <div className={'fit'}>
                    <div className={'progress-bar'}>
                    </div>
                    <div className={'progress-bar'}>
                    </div>
                    <p>Aby zobaczyć dane kontaktowe kandydata, zaproś go do dalszego etapu rekrutacji.
                        Dane zostaną ujawnione, gdy kandydat przyjmie Twoje zaproszenie.</p>
                </div>
                <div className={'result'}>
                    <p>DOPASOWANIE:</p>
                    <h1>76%</h1>
                </div>
            </div>
            <div className={'action'}>
                <a>DOPASOWANY W INNYCH PROCESACH(4)...</a>
                <button>PRZENIEŚ</button>
                <button>ZAPROŚ</button>
            </div>
        </section>
    )
}


export default Summary
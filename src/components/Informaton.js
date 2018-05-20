import React from 'react'
import '../styles/Information.scss'

const Information = () => {
    return (
        <section className={'information-container'}>
            <div className="information">
                <div className="container">
                    <div className="content content--left">
                        <h2 className={'content__data'}>PROFIL ZAWODOWY</h2>
                        <p className={'content__information content__information--big'}>KANDYDAT NIE PODAL STANOWISKA</p>
                        <p className={'content__information'}>kandydat nie podał informacji nt. stażu w ostatniej pracy</p>
                        <p className={'content__information'}>kandydat nie okrślił jeszcze łącznego doświadczenia</p>
                    </div>
                    <div className="content content--left">
                        <h2 className={'content__data'}>UMIEJĘTNOŚCi</h2>
                        <p className={'content__information'}>kandydat jeszcze nie zdefiniował umiejętności</p>
                    </div>
                    <div className="content content--left">
                        <h2 className={'content__data'}>WYKSZTALCENIE</h2>
                        <p className={'content__information'}>kandydat jeszce nie podał poziomu wykształcenia</p>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="container">
                    <div className="content content--right">
                        <h2 className={'content__data'}>LOKALIZACJA</h2>
                        <p className={'content__information content__information--big'}>KANDYDAT NIE PODAL PREFEROWANEGO MIASTA</p>
                        <p className={'content__information'}>kandydat nie wskazał preferowanego województwa</p>
                        <p className={'content__information'}>kandydat nie odpowiedział jeszcze na pytanie o relokację</p>
                    </div>
                    <div className="content content--right">
                        <h2 className={'content__data'}>OCZEKIWANIA</h2>
                        <p className={'content__information'}>kandydat nie podał jeszcze oczekiwanego wynagrodzenia</p>
                        <p className={'content__information'}>kandydat nie wskazał preferowanej formy współpracy</p>
                        <p className={'content__information'}>kandydat nie zadeklarował jeszcze terminu dostepności</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Information

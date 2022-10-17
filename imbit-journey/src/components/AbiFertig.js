import './../styles/AbiFertig.css';
import picture from "./../images/face1.png";

const AbiFertig = () => {
    return (
        <main>
            <div className="abifertig">
                <img className="abifertig-picture" src={picture} alt=""></img>
                <div className="abifertig-text">
                    <h1 className="abifertig-text-h1">Abi fertig <br /> was jetzt?</h1>
                    <h5 className="abifertig-text-h6">Ein neuer Lebensabschnitt</h5>
                    <p className="abifertig-text-paragraph">
                    Du hast die Hochschulreife erlangt oder bist kurz davor und weißt noch nicht genau wie es weitergeht? <br />
                    Ein interessantes und abwecklungsreiches duales Studium bietet dir die Möglichkeit deinen persönlichen und beruflichen Horizont zu erweitern
                    </p>
                    <a href="https://www.mannheim.dhbw.de/dual-studieren/bachelor/wirtschaft/wirtschaftsinformatik/imbit" target="_blank" rel="noreferrer">    
                    <button className='abifertig-text-button'>ÜBER UNS</button>
                    </a>
                </div>
            </div>
        </main>   
    )
}



export default AbiFertig;
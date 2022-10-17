import './../styles/TitlePage.css'

const TitlePage = () => {
    return (
        <main className="titlepage">
            <div className="titlepage-headers">
                <h1 className="titlepage-headers-h1">   
                International <br /> 
                Management <br /> 
                for Business <br /> 
                & IT</h1>
                <h4 className="titlepage-headers-h4">   
                Entdecke die IMBIT Journey: <br />
                <br />
                Wirtschaftsinformatik international <br />
                gelebt & gelehrt</h4>
            </div>
            <div className='titlepage-shape'>
                <div className="titlepage-shape-square"></div>
                <div className="titlepage-shape-rect1"></div>
                <div className="titlepage-shape-rect2"></div>
            </div>
        </main>
    )
}

export default TitlePage;
import logo from '../assets/shared/logo.svg'
import closer from '../assets/shared/icon-close.svg'
import iconB from '../assets/shared/icon-hamburger.svg'
import { useLocation } from 'react-router-dom';


import { useEffect, useState } from 'react'

const Destinations = ({burgerDiv, setBurgerDiv}) => {
    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)
    const [data, setData] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        fetch('./data.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching the data:', error))
    }, []) 
    
    function handleBurger() {
        setBurgerDiv(!burgerDiv)
    }
    
    const updateToMoon = () => {
        setCurrentIndex(0)
    }
    const updateToMars = () => {
        setCurrentIndex(1)
    }
    const updateToEuropa = () => {
        setCurrentIndex(2)
    }
    const updateToTitan = () => {
        setCurrentIndex(3)
    }
    
    if (!data) {
        return <div>Loading...</div>  
    }
    
    const currentDestination = data.destinations[currentIndex]
    console.log(currentDestination)
    
    return (
        <div className="DestWrpper">
            <div className="NavBarsection">
                <img src={logo} className='logo' alt="" />
                <img src={iconB} onClick={handleBurger} className='burger' alt="" />
                {burgerDiv ? (
                    <div className='ss'>
                    <img src={closer} onClick={handleBurger} alt="/" />
                    <div className='amobwar'>
                        <a href="/">
                            <div className='taggMob'>
                                <span className='navNumMob'>01</span>
                                <span className='gotoMob'>home</span>
                            </div>
                        </a>
                        <a href="/destination">
                            <div className='taggMob'>
                                <span className='navNumMob'>02</span>
                                <span className='gotoMob'>destination</span>
                            </div>
                        </a>
                        <a href="/crew">
                            <div className='taggMob'>
                                <span className='navNumMob'>03</span>
                                <span className='gotoMob'>crew</span>
                            </div>
                        </a>
                        <a href="/tech">
                            <div className='taggMob'>
                                <span className='navNumMob'>04</span>
                                <span className='gotoMob'>technology</span>
                            </div>
                        </a>
                    </div>
                </div>
                ): ''}
                {/* <span className='line'></span> */}
                <div className='navwrapper '>
                    <a href="/" className={currentPath === '/' ? 'active' : ''}>
                        <div className='tagg '>
                            <span className='navNum'>01</span>
                            <span className='goto'>home</span>
                        </div>
                    </a>
                    <a href="/destination" className={currentPath === '/destination' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>02</span>
                            <span className='goto'>destination</span>
                        </div>
                    </a>
                    <a href="/crew" className={currentPath === '/crew' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>03</span>
                            <span className='goto'>crew</span>
                        </div>
                    </a>
                    <a href="/tech" className={currentPath === '/tech' ? 'active' : ''}>
                        <div className='tagg'>
                            <span className='navNum'>04</span>
                            <span className='goto'>technology</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="check">
                <div className='planetImg'>
                    <div className='choose'>
                        <span className='npick'>01</span>
                        <span className='pick'>Pick your destination</span>
                    </div>
                    <img src={currentDestination.images.png} alt="" />
                </div>
                <div className='planetInfo'>
                    <div className='drct'>
                        <span onClick={updateToMoon}>Moon</span>
                        <span onClick={updateToMars}>Mars</span>
                        <span onClick={updateToEuropa}>Europa</span>
                        <span onClick={updateToTitan}>Titan</span>
                    </div>
                    <span className='planetName'>{currentDestination.name}</span>
                    <p>{currentDestination.description}</p>
                    <div className='disAndTime'>
                        <div className='dis'>
                            <span className='distimtitle'>AVG. DISTANCE</span>
                            <span className='distimas'>{currentDestination.distance}</span>
                        </div>
                        <div className='tim'>
                            <span className='distimtitle'>Est. travel time</span>
                            <span className='distimas'>{currentDestination.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destinations;

import logo from '../assets/shared/logo.svg'
import closer from '../assets/shared/icon-close.svg'
import iconB from '../assets/shared/icon-hamburger.svg'
import { useLocation } from 'react-router-dom';


import { useEffect, useState } from 'react'

const CrewPage = ({burgerDiv, setBurgerDiv}) => {
    const [data, setData] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const location = useLocation()
    const currentPath = location.pathname
    console.log(currentPath)
    
    useEffect(() => {
        fetch('./data.json')
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error('Error fetching the data:', error))
    }, []) 
    
    function handleBurger() {
        setBurgerDiv(!burgerDiv)
    }
    
    const updateToCrew1 = () => {
        setCurrentIndex(0)
    }
    const updateToCrew2 = () => {
        setCurrentIndex(1)
    }
    const updateToCrew3 = () => {
        setCurrentIndex(2)
    }
    const updateToCrew4 = () => {
        setCurrentIndex(3)
    }
    
    if (!data) {
        return <div>Loading...</div>  
    }
    
    const currentCew = data.crew[currentIndex]
    console.log(currentCew)
    
    return (
        <div className="crewWrpper">
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
            <div className='choose test hidemob'>
                    <span className='npick'>01</span>
                    <span className='pick'>Pick your destination</span>
                </div>
            <div className="crewArticle">
              <div className='head'>
                <div className='choose hidedes choosehide'>
                    <span className='npick'>01</span>
                    <span className='pick'>Pick your destination</span>
                </div>
                <div className='imgCrew'>
                    <img src={currentCew.images.png} alt="" />
                </div>
              </div>
              <div className='holder hide'>
                <div className='dot' onClick={updateToCrew1}></div>
                <div className='dot' onClick={updateToCrew2}></div>
                <div className='dot' onClick={updateToCrew3}></div>
                <div className='dot' onClick={updateToCrew4}></div>
              </div>
              <div className='crew-content'>
                <div className='roleandname'>
                    <span className='role'>{currentCew.role}</span>
                    <span className='crewName'>{currentCew.name}</span>
                </div>
                <p>{currentCew.bio}</p>
                <div className='holder hidemob'>
                <div className='dot' onClick={updateToCrew1}></div>
                <div className='dot' onClick={updateToCrew2}></div>
                <div className='dot' onClick={updateToCrew3}></div>
                <div className='dot' onClick={updateToCrew4}></div>
              </div>
              </div>
            </div>
        </div>
    );
}

export default CrewPage;
